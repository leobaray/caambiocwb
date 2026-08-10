/* ============================================================
   home.js — vitrine da página inicial
   Escolhe peças de transmissões diferentes, priorizando as que
   têm mais fotos. Sem sorteio: a home precisa ser estável para
   quem volta ao site e para o cache.
   ============================================================ */
(function () {
  var grid = document.getElementById('home-destaques');
  if (!grid || typeof PRODUCTS === 'undefined') return;

  var porFotos = PRODUCTS.slice().sort(function (a, b) {
    if (b.photos !== a.photos) return b.photos - a.photos;
    return a.name.localeCompare(b.name, 'pt-BR');
  });

  var escolhidas = [];
  var categoriasUsadas = {};
  for (var i = 0; i < porFotos.length && escolhidas.length < 4; i++) {
    var p = porFotos[i];
    if (categoriasUsadas[p.category]) continue;
    categoriasUsadas[p.category] = true;
    escolhidas.push(p);
  }

  grid.innerHTML = escolhidas.map(productCardHtml).join('');

  var total = document.getElementById('home-total');
  if (total) total.textContent = PRODUCTS.length;
})();
