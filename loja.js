/* ============================================================
   loja.js — catálogo: navegação por transmissão + busca
   Depende de site.js (escapeHtml) e products.js (dados).
   O estado fica na URL: loja.html?transmissao=6R80&q=chicote
   ============================================================ */
(function () {
  var categoryFilterEl = document.getElementById('category-filter');
  var categoriesEl = document.getElementById('categories');
  var categoriesEmptyEl = document.getElementById('categories-empty');
  var searchEl = document.getElementById('product-search');
  var titleEl = document.getElementById('shop-title');
  var countEl = document.getElementById('shop-count');
  var tagsEl = document.getElementById('filter-tags');
  var gridEl = document.getElementById('products-grid');
  var maisEl = document.getElementById('load-more');
  var filtersEl = document.getElementById('filters');

  if (!gridEl) return;

  var counts = countByCategory();
  var state = { category: 'all', query: '' };

  /* ---------- URL ---------- */

  function readStateFromUrl() {
    var params = new URLSearchParams(location.search);
    var category = params.get('transmissao');

    /* links antigos usavam #CATEGORIA — continuam funcionando */
    if (!category && location.hash) {
      category = decodeURIComponent(location.hash.slice(1));
    }

    state.category = category && CATEGORIES.indexOf(category) >= 0 ? category : 'all';
    state.query = (params.get('q') || '').trim();
  }

  function urlForState(category, query) {
    var params = new URLSearchParams();
    if (category && category !== 'all') params.set('transmissao', category);
    if (query) params.set('q', query);
    var qs = params.toString();
    return 'loja.html' + (qs ? '?' + qs : '');
  }

  function pushState(replace) {
    var url = urlForState(state.category, state.query);
    history[replace ? 'replaceState' : 'pushState'](null, '', url);
  }

  /* ---------- barra lateral ---------- */

  function renderCategories() {
    var total = PRODUCTS.length;
    var html = [
      '<li data-cat="all">' +
        '<a href="' + urlForState('all', state.query) + '">' +
          '<span>Todos os produtos</span><span class="count">' + total + '</span>' +
        '</a>' +
      '</li>'
    ];

    for (var i = 0; i < CATEGORIES.length; i++) {
      var cat = CATEGORIES[i];
      var n = counts[cat] || 0;
      html.push(
        '<li data-cat="' + escapeHtml(cat) + '"' + (n === 0 ? ' class="is-empty"' : '') + '>' +
          '<a href="' + escapeHtml(urlForState(cat, state.query)) + '"' +
             (n === 0 ? ' title="Ainda sem peça cadastrada — fale com a gente"' : '') + '>' +
            '<span>' + escapeHtml(cat) + '</span>' +
            '<span class="count">' + n + '</span>' +
          '</a>' +
        '</li>'
      );
    }

    categoriesEl.innerHTML = html.join('');
  }

  function markActiveCategory() {
    var items = categoriesEl.querySelectorAll('li');
    for (var i = 0; i < items.length; i++) {
      var active = items[i].getAttribute('data-cat') === state.category;
      items[i].classList.toggle('is-active', active);
      var link = items[i].querySelector('a');
      if (active) { link.setAttribute('aria-current', 'true'); }
      else { link.removeAttribute('aria-current'); }
    }
  }

  function filterCategoryList(term) {
    var needle = normalizeText(term);
    var items = categoriesEl.querySelectorAll('li');
    var visible = 0;

    for (var i = 0; i < items.length; i++) {
      var cat = items[i].getAttribute('data-cat');
      var match = !needle || cat === 'all' || normalizeText(cat).indexOf(needle) >= 0;
      items[i].hidden = !match;
      if (match && cat !== 'all') visible++;
    }

    if (categoriesEmptyEl) categoriesEmptyEl.hidden = !(needle && visible === 0);
  }

  /* ---------- grade de produtos ---------- */

  function emptyState() {
    var motivo = state.query
      ? 'Nenhuma peça encontrada para <strong>&ldquo;' + escapeHtml(state.query) + '&rdquo;</strong>' +
        (state.category !== 'all' ? ' em ' + escapeHtml(state.category) : '') + '.'
      : 'Ainda não temos peça cadastrada em <strong>' + escapeHtml(state.category) + '</strong> aqui no site.';

    return '<div class="empty-state">' +
      '<i class="fa-solid fa-box-open" aria-hidden="true"></i>' +
      '<h2>Não achamos essa peça no site</h2>' +
      '<p>' + motivo + ' O estoque da loja é maior do que o catálogo online — mande o modelo do câmbio que a gente confere pra você.</p>' +
      '<div class="btn-row" style="justify-content:center">' +
        '<a class="btn btn-wa" href="' + escapeHtml(buildWhatsAppUrl(whatsappMessage())) + '" target="_blank" rel="noopener">' +
          '<i class="fa-brands fa-whatsapp" aria-hidden="true"></i> Perguntar no WhatsApp</a>' +
        '<a class="btn btn-outline" href="loja.html">Ver todas as peças</a>' +
      '</div>' +
    '</div>';
  }

  function whatsappMessage() {
    if (state.query) return 'Olá! Procuro por "' + state.query + '" e não encontrei no site. Vocês têm?';
    if (state.category !== 'all') return 'Olá! Procuro peça para a transmissão ' + state.category + '. Vocês têm?';
    return 'Olá! Vim pelo site e gostaria de um orçamento.';
  }

  function renderTags() {
    if (!tagsEl) return;
    var tags = [];

    if (state.category !== 'all') {
      tags.push(
        '<span class="filter-tag">' + escapeHtml(state.category) +
          '<button type="button" data-clear="category" aria-label="Remover filtro de transmissão">' +
            '<i class="fa-solid fa-xmark" aria-hidden="true"></i></button>' +
        '</span>'
      );
    }
    if (state.query) {
      tags.push(
        '<span class="filter-tag">Busca: &ldquo;' + escapeHtml(state.query) + '&rdquo;' +
          '<button type="button" data-clear="query" aria-label="Limpar busca">' +
            '<i class="fa-solid fa-xmark" aria-hidden="true"></i></button>' +
        '</span>'
      );
    }

    tagsEl.innerHTML = tags.join('');
    tagsEl.hidden = tags.length === 0;
  }

  /* Com 347 peças no catálogo, montar tudo de uma vez enche a página
     de card e deixa a rolagem pesada. Mostra em blocos. */
  var POR_VEZ = 24;
  var visiveis = POR_VEZ;
  var listaAtual = [];

  function renderLote() {
    gridEl.innerHTML = listaAtual.slice(0, visiveis).map(productCardHtml).join('');

    var faltam = listaAtual.length - visiveis;
    maisEl.hidden = faltam <= 0;
    if (faltam > 0) {
      maisEl.querySelector('button').textContent =
        'Ver mais ' + Math.min(POR_VEZ, faltam) + ' peças';
      maisEl.querySelector('p').textContent =
        'Mostrando ' + visiveis + ' de ' + listaAtual.length;
    }
  }

  function render() {
    listaAtual = searchProducts(getProductsByCategory(state.category), state.query);
    visiveis = POR_VEZ;

    titleEl.textContent = state.category === 'all' ? 'Todos os produtos' : state.category;
    countEl.textContent = listaAtual.length + (listaAtual.length === 1 ? ' peça' : ' peças');

    document.title = (state.category === 'all' ? 'Catálogo de peças' : state.category) + ' | CAAMBIOCWB';

    if (!listaAtual.length) {
      gridEl.innerHTML = emptyState();
      maisEl.hidden = true;
    } else {
      renderLote();
    }

    renderTags();
    markActiveCategory();
  }

  /* ---------- eventos ---------- */

  /* Trocar de transmissão troca a grade inteira. Se o visitante estava lá
     embaixo, o resultado novo nasce fora da vista dele — então leva a
     página de volta para o começo da lista. Só mexe no scroll quando o
     topo da lista já saiu da tela; se ele já está vendo, fica quieto. */
  function irParaResultados() {
    var alvo = document.querySelector('.shop-toolbar');
    if (!alvo) return;

    var cabecalho = document.querySelector('.site-header');
    var folga = (cabecalho ? cabecalho.getBoundingClientRect().height : 0) + 16;
    var topo = alvo.getBoundingClientRect().top;
    if (topo >= folga) return;

    var suave = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({
      top: window.scrollY + topo - folga,
      behavior: suave ? 'smooth' : 'auto'
    });
  }

  categoriesEl.addEventListener('click', function (e) {
    var link = e.target.closest('a');
    if (!link || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;

    e.preventDefault();
    state.category = link.parentNode.getAttribute('data-cat');
    pushState(false);
    render();

    /* no celular a lista de transmissões é um acordeão em cima da grade:
       fecha para o resultado aparecer sem precisar rolar por ela */
    if (filtersEl && window.innerWidth <= 1000) filtersEl.open = false;
    irParaResultados();
  });

  if (tagsEl) {
    tagsEl.addEventListener('click', function (e) {
      var button = e.target.closest('button[data-clear]');
      if (!button) return;

      if (button.getAttribute('data-clear') === 'category') state.category = 'all';
      else { state.query = ''; if (searchEl) searchEl.value = ''; }

      pushState(false);
      render();
      irParaResultados();
    });
  }

  if (maisEl) {
    maisEl.querySelector('button').addEventListener('click', function () {
      var jaTinha = visiveis;
      visiveis += POR_VEZ;
      renderLote();
      var cards = gridEl.querySelectorAll('.product');
      if (cards[jaTinha]) cards[jaTinha].focus({ preventScroll: true });
    });
  }

  var searchTimer = null;
  if (searchEl) {
    searchEl.addEventListener('input', function () {
      clearTimeout(searchTimer);
      searchTimer = setTimeout(function () {
        state.query = searchEl.value.trim();
        pushState(true);
        render();
      }, 180);
    });
  }

  if (categoryFilterEl) {
    categoryFilterEl.addEventListener('input', function () {
      filterCategoryList(categoryFilterEl.value.trim());
    });
  }

  window.addEventListener('popstate', function () {
    readStateFromUrl();
    if (searchEl) searchEl.value = state.query;
    renderCategories();
    filterCategoryList(categoryFilterEl ? categoryFilterEl.value.trim() : '');
    render();
  });

  /* No desktop a barra lateral fica sempre aberta; no celular ela vira
     um acordeão para os produtos não ficarem soterrados pela lista. */
  if (filtersEl) {
    var syncFilters = function () {
      if (window.innerWidth > 1000) filtersEl.open = true;
    };
    syncFilters();
    window.addEventListener('resize', syncFilters);
  }

  /* ---------- início ---------- */
  readStateFromUrl();
  if (searchEl) searchEl.value = state.query;
  renderCategories();
  render();
})();
