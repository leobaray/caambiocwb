/* ============================================================
   produto.js — galeria da página da peça

   A página em si é estática: ferramentas/gerar-site.py escreve
   peca/<id>/index.html com texto, ficha, fotos e dados estruturados
   já dentro do HTML. Este arquivo só acrescenta o comportamento de
   trocar a foto grande ao clicar numa miniatura — sem ele a página
   continua completa, só não troca de foto.
   ============================================================ */
(function () {
  var foto = document.getElementById('product-photo');
  var faixa = document.querySelector('.gallery-strip');
  if (!foto || !faixa) return;

  function mostrar(botao) {
    foto.src = botao.getAttribute('data-photo');
    var todas = faixa.querySelectorAll('.gallery-thumb');
    for (var i = 0; i < todas.length; i++) todas[i].classList.remove('is-active');
    botao.classList.add('is-active');
  }

  faixa.addEventListener('click', function (e) {
    var botao = e.target.closest('.gallery-thumb');
    if (botao) mostrar(botao);
  });

  /* com o foco na faixa, as setas percorrem as fotos */
  faixa.addEventListener('keydown', function (e) {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    var todas = Array.prototype.slice.call(faixa.querySelectorAll('.gallery-thumb'));
    var atual = todas.indexOf(document.activeElement);
    if (atual < 0) return;

    e.preventDefault();
    var passo = e.key === 'ArrowRight' ? 1 : -1;
    var proxima = todas[(atual + passo + todas.length) % todas.length];
    proxima.focus();
    mostrar(proxima);
  });
})();
