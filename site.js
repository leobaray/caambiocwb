/* ============================================================
   site.js — dados da empresa + comportamentos compartilhados
   Carregado em todas as páginas, antes de products.js.
   ============================================================ */

/* Tudo que muda quando a empresa muda (telefone, e-mail, horário)
   fica AQUI. Nenhum outro arquivo repete esses valores. */
var SITE = {
  origin: 'https://caambiocwb.com.br',
  name: 'CAAMBIOCWB',
  legalName: 'CAAMBIOCWB Comercio de Pecas LTDA',
  cnpj: '30.005.760/0001-52',
  attendant: 'Gabriel Melniski',
  phoneDisplay: '(41) 99693-9384',
  phoneTel: '+5541996939384',
  whatsapp: '5541996939384',
  email: 'contato@caambiocwb.com.br',
  address: {
    street: 'R. Francisco Derosso, 6460 - 3',
    district: 'Alto Boqueirão',
    city: 'Curitiba',
    state: 'PR',
    zip: ''
  },
  /* Segunda a sexta, 08h30 às 18h00 (horário de Curitiba) */
  hours: { days: [1, 2, 3, 4, 5], opens: 8 * 60 + 30, closes: 18 * 60 },
  timezone: 'America/Sao_Paulo'
};

/* O complemento (o "- 3") atrapalha a geolocalizacao do Google, entao a
   busca do mapa usa so a rua e o numero. O CEP entra se um dia existir. */
SITE.mapsUrl = (function () {
  var rua = SITE.address.street.replace(/\s*-\s*\d+\s*$/, '');
  var partes = [rua, SITE.address.district,
                SITE.address.city + ' - ' + SITE.address.state];
  if (SITE.address.zip) partes.push(SITE.address.zip);
  return 'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent(partes.join(', '));
})();

/* ---------- utilitários ---------- */

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
  });
}

function buildWhatsAppUrl(message) {
  var base = 'https://wa.me/' + SITE.whatsapp;
  return message ? base + '?text=' + encodeURIComponent(message) : base;
}

/* ---------- horário de funcionamento ---------- */

/* Retorna { day, minutes } no fuso de Curitiba, independente do
   relógio do visitante. Devolve null se o navegador não suportar. */
function currentTimeAtShop() {
  try {
    var parts = new Intl.DateTimeFormat('en-US', {
      timeZone: SITE.timezone,
      weekday: 'short',
      hour: '2-digit',
      minute: '2-digit',
      hourCycle: 'h23'
    }).formatToParts(new Date());

    var bag = {};
    for (var i = 0; i < parts.length; i++) bag[parts[i].type] = parts[i].value;

    var weekdays = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
    if (!(bag.weekday in weekdays)) return null;

    return {
      day: weekdays[bag.weekday],
      minutes: parseInt(bag.hour, 10) * 60 + parseInt(bag.minute, 10)
    };
  } catch (e) {
    return null;
  }
}

function businessStatus() {
  var now = currentTimeAtShop();
  if (!now) return null;

  var isWorkday = SITE.hours.days.indexOf(now.day) >= 0;
  if (isWorkday && now.minutes >= SITE.hours.opens && now.minutes < SITE.hours.closes) {
    return { open: true, label: 'Aberto agora' };
  }

  var when;
  if (isWorkday && now.minutes < SITE.hours.opens) {
    when = 'hoje';
  } else if (now.day === 5 || now.day === 6) {
    when = 'segunda-feira';
  } else if (now.day === 0) {
    when = 'amanhã';
  } else {
    when = 'amanhã';
  }

  return { open: false, label: 'Fechado · abre ' + when + ' às 08h30' };
}

/* ---------- comportamentos de página ---------- */

function initBusinessStatus() {
  var status = businessStatus();
  if (!status) return;

  var nodes = document.querySelectorAll('[data-business-status]');
  for (var i = 0; i < nodes.length; i++) {
    nodes[i].textContent = status.label;
    nodes[i].classList.add(status.open ? 'is-open' : 'is-closed');
    nodes[i].hidden = false;
  }
}

/* Marca o link da página atual sem duplicar markup entre os arquivos:
   o CSS usa body[data-page], o JS só acrescenta a semântica. */
function initCurrentNav() {
  var page = document.body.getAttribute('data-page');
  if (!page) return;
  if (page === 'produto') page = 'loja';

  var link = document.querySelector('.main-nav a[data-nav="' + page + '"]');
  if (link) link.setAttribute('aria-current', 'page');
}

function initMobileNav() {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('main-nav');
  if (!toggle || !nav) return;

  function setOpen(open) {
    document.body.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  }

  toggle.addEventListener('click', function () {
    setOpen(!document.body.classList.contains('nav-open'));
  });

  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && document.body.classList.contains('nav-open')) {
      setOpen(false);
      toggle.focus();
    }
  });

  /* Se a janela voltar ao tamanho desktop com o menu aberto, fecha. */
  window.addEventListener('resize', function () {
    if (window.innerWidth > 900) setOpen(false);
  });
}

function initStickyHeader() {
  var header = document.querySelector('.site-header');
  if (!header) return;

  var ticking = false;
  function update() {
    header.classList.toggle('is-scrolled', window.scrollY > 8);
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
  }, { passive: true });
  update();
}

function initYear() {
  var nodes = document.querySelectorAll('[data-year]');
  var year = new Date().getFullYear();
  for (var i = 0; i < nodes.length; i++) nodes[i].textContent = year;
}

/* O botão flutuante fica colado no canto enquanto há conteúdo, mas para
   no fecho da página em vez de cobrir a faixa de contato e o rodapé —
   que é justamente onde estão o telefone e o e-mail. Empurra pelo exato
   tanto que o fecho já invadiu a tela, então ele parece pousar em cima. */
function initFloatingWhatsApp() {
  var botao = document.querySelector('.wa-float');
  if (!botao) return;

  var fecho = document.querySelector('.contact-strip') || document.querySelector('.site-footer');
  if (!fecho) return;

  var agendado = false;

  function ajustar() {
    agendado = false;
    var invasao = window.innerHeight - fecho.getBoundingClientRect().top;
    botao.style.setProperty('--wa-lift', (invasao > 0 ? Math.round(invasao) : 0) + 'px');
  }

  function pedirAjuste() {
    if (agendado) return;
    agendado = true;
    window.requestAnimationFrame(ajustar);
  }

  window.addEventListener('scroll', pedirAjuste, { passive: true });
  window.addEventListener('resize', pedirAjuste);

  /* A altura da página ainda muda depois deste ponto: fontes carregam,
     imagens entram, a loja monta a grade e o "ver mais" acrescenta
     cards. Em página que não rola não há scroll para recalcular, então
     acompanha o tamanho do documento. */
  if (window.ResizeObserver) {
    new ResizeObserver(pedirAjuste).observe(document.body);
  } else {
    window.addEventListener('load', pedirAjuste);
  }
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(pedirAjuste);
  }

  ajustar();
}

/* Formulário de contato: não existe servidor, então em vez de fingir
   um envio o formulário monta a mensagem e entrega no canal que a
   loja realmente usa (WhatsApp), com e-mail como alternativa. */
function initContactForm() {
  var form = document.getElementById('contact-form');
  if (!form) return;

  var feedback = document.getElementById('form-feedback');

  function readMessage() {
    var data = new FormData(form);
    var nome = (data.get('nome') || '').toString().trim();
    var sobrenome = (data.get('sobrenome') || '').toString().trim();
    var email = (data.get('email') || '').toString().trim();
    var telefone = (data.get('telefone') || '').toString().trim();
    var veiculo = (data.get('veiculo') || '').toString().trim();
    var mensagem = (data.get('mensagem') || '').toString().trim();

    var linhas = ['Olá! Meu nome é ' + nome + ' ' + sobrenome + '.'];
    if (veiculo) linhas.push('Veículo / câmbio: ' + veiculo);
    linhas.push('', mensagem, '', 'E-mail: ' + email);
    if (telefone) linhas.push('Telefone: ' + telefone);

    return { texto: linhas.join('\n'), nome: nome };
  }

  function showFeedback(html) {
    if (!feedback) return;
    feedback.innerHTML = html;
    feedback.hidden = false;
    feedback.focus();
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!form.reportValidity()) return;

    var msg = readMessage();
    var url = buildWhatsAppUrl(msg.texto);
    window.open(url, '_blank', 'noopener');

    showFeedback(
      '<strong>Pronto, ' + escapeHtml(msg.nome.split(' ')[0]) + '.</strong> ' +
      'Abrimos o WhatsApp com a sua mensagem já escrita — é só tocar em enviar. ' +
      'Se a janela não abriu, <a href="' + escapeHtml(url) + '" target="_blank" rel="noopener">clique aqui</a>.'
    );
  });

  var mailButton = form.querySelector('[data-send-email]');
  if (mailButton) {
    mailButton.addEventListener('click', function () {
      if (!form.reportValidity()) return;
      var msg = readMessage();
      window.location.href =
        'mailto:' + SITE.email +
        '?subject=' + encodeURIComponent('Contato pelo site — ' + msg.nome) +
        '&body=' + encodeURIComponent(msg.texto);
    });
  }
}

document.addEventListener('DOMContentLoaded', function () {
  initCurrentNav();
  initMobileNav();
  initStickyHeader();
  initBusinessStatus();
  initYear();
  initFloatingWhatsApp();
  initContactForm();
});
