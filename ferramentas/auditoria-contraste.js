/* ============================================================
   auditoria-contraste.js — checagem de contraste WCAG 2.1 AA
   ============================================================

   COMO USAR
     Abra qualquer página do site no Chrome, aperte F12, vá em Console
     e cole o conteúdo deste arquivo. Ele devolve um JSON com todo
     texto visível que não alcança o contraste mínimo.

   O QUE ELE FAZ
     Percorre o DOM renderizado, resolve a cor de fundo efetiva de cada
     elemento (subindo a árvore e compondo camadas semitransparentes) e
     compara com a cor do texto. O mínimo é 4.5:1, ou 3:1 quando o texto
     é grande (24px, ou 18.66px em negrito).

     Rode com o menu do celular aberto, com a loja em estado vazio e na
     página de contato fora do horário comercial — são estados que só
     aparecem em situações específicas.

   LIMITE
     Não cobre :hover nem :focus, e marca "fundoComImagem" quando o
     elemento está sobre uma imagem (aí a conta usa só a cor de fundo).
   ============================================================ */
(function () {
  function corPara(str) {
    var m = String(str).match(/rgba?\(([^)]+)\)/);
    if (!m) return null;
    var p = m[1].split(',').map(function (x) { return parseFloat(x); });
    return { r: p[0], g: p[1], b: p[2], a: p.length > 3 ? p[3] : 1 };
  }

  function sobrepor(frente, fundo) {
    var a = frente.a;
    return {
      r: frente.r * a + fundo.r * (1 - a),
      g: frente.g * a + fundo.g * (1 - a),
      b: frente.b * a + fundo.b * (1 - a),
      a: 1
    };
  }

  function luminancia(c) {
    var v = [c.r, c.g, c.b].map(function (x) {
      x = x / 255;
      return x <= 0.03928 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * v[0] + 0.7152 * v[1] + 0.0722 * v[2];
  }

  function razao(a, b) {
    var la = luminancia(a), lb = luminancia(b);
    return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
  }

  function hex(c) {
    return '#' + [c.r, c.g, c.b].map(function (x) {
      return ('0' + Math.round(x).toString(16)).slice(-2);
    }).join('');
  }

  /* Fundo efetivo: sobe a árvore compondo as camadas até achar algo opaco. */
  function fundoDe(el) {
    var camadas = [];
    var no = el;
    var temImagem = false;
    while (no && no.nodeType === 1) {
      var cs = getComputedStyle(no);
      if (cs.backgroundImage && cs.backgroundImage !== 'none') temImagem = true;
      var c = corPara(cs.backgroundColor);
      if (c && c.a > 0) {
        camadas.push(c);
        if (c.a === 1) break;
      }
      no = no.parentElement;
    }
    var resultado = { r: 255, g: 255, b: 255, a: 1 };
    for (var i = camadas.length - 1; i >= 0; i--) resultado = sobrepor(camadas[i], resultado);
    return { cor: resultado, temImagem: temImagem };
  }

  function visivel(el) {
    var cs = getComputedStyle(el);
    if (cs.display === 'none' || cs.visibility === 'hidden' || parseFloat(cs.opacity) === 0) return false;
    var r = el.getBoundingClientRect();
    return r.width > 0 && r.height > 0;
  }

  function textoDireto(el) {
    var t = '';
    for (var i = 0; i < el.childNodes.length; i++) {
      if (el.childNodes[i].nodeType === 3) t += el.childNodes[i].nodeValue;
    }
    return t.trim();
  }

  var achados = [];
  var todos = document.querySelectorAll('body *');

  for (var i = 0; i < todos.length; i++) {
    var el = todos[i];
    if (el.closest('.sr-only, .skip-link, noscript')) continue;

    var texto = textoDireto(el);
    if (!texto) continue;
    if (!visivel(el)) continue;

    var cs = getComputedStyle(el);
    var frente = corPara(cs.color);
    if (!frente) continue;

    var f = fundoDe(el);
    var corTexto = frente.a < 1 ? sobrepor(frente, f.cor) : frente;
    var r = razao(corTexto, f.cor);

    var tamanho = parseFloat(cs.fontSize);
    var peso = parseInt(cs.fontWeight, 10) || 400;
    var grande = tamanho >= 24 || (tamanho >= 18.66 && peso >= 700);
    var minimo = grande ? 3 : 4.5;

    if (r < minimo) {
      achados.push({
        seletor: el.tagName.toLowerCase() +
          (el.className && typeof el.className === 'string'
            ? '.' + el.className.trim().split(/\s+/).slice(0, 3).join('.') : ''),
        texto: texto.slice(0, 45),
        cor: hex(corTexto),
        fundo: hex(f.cor),
        px: Math.round(tamanho * 10) / 10,
        peso: peso,
        razao: Math.round(r * 100) / 100,
        minimo: minimo,
        fundoComImagem: f.temImagem
      });
    }
  }

  /* dedup por combinação seletor+cor+fundo */
  var vistos = {}, unicos = [];
  achados.forEach(function (a) {
    var k = a.seletor + '|' + a.cor + '|' + a.fundo + '|' + a.minimo;
    if (!vistos[k]) { vistos[k] = 1; unicos.push(a); }
  });

  return JSON.stringify({ url: location.pathname, total: unicos.length, achados: unicos }, null, 1);
})();
