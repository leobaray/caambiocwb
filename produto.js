/* ============================================================
   produto.js — página de uma peça, com galeria de fotos
   Depende de site.js (escapeHtml, SITE) e products.js (dados).
   ============================================================ */
(function () {
  var container = document.getElementById('product-container');
  if (!container) return;

  var product = getProductById(new URLSearchParams(location.search).get('id') || '');

  /* ---------- peça inexistente ---------- */
  if (!product) {
    document.title = 'Peça não encontrada | CAAMBIOCWB';
    setMeta('robots', 'noindex, follow');

    container.innerHTML =
      '<div class="product-notfound">' +
        '<i class="fa-solid fa-triangle-exclamation" aria-hidden="true"></i>' +
        '<h1>Não encontramos essa peça</h1>' +
        '<p>O link pode estar errado ou a peça saiu do catálogo online. ' +
        'Mesmo assim vale perguntar: o estoque da loja é maior do que o site.</p>' +
        '<div class="btn-row" style="justify-content:center">' +
          '<a class="btn btn-dark" href="loja.html">Voltar para o catálogo</a>' +
          '<a class="btn btn-wa" href="' + escapeHtml(buildWhatsAppUrl('Olá! Procuro uma peça que não achei no site.')) + '" target="_blank" rel="noopener">' +
            '<i class="fa-brands fa-whatsapp" aria-hidden="true"></i> Perguntar no WhatsApp</a>' +
        '</div>' +
      '</div>';
    return;
  }

  /* ---------- cabeça do documento ---------- */
  var pageUrl = SITE.origin + '/' + buildProductUrl(product.id);
  var pageTitle = product.name + ' — ' + product.category + ' | CAAMBIOCWB';
  var resumo = product.name + ' para câmbio automático ' + product.transmission +
    (product.application ? ' (' + product.application + ')' : '') + '. Orçamento pelo WhatsApp.';

  document.title = pageTitle;
  setMeta('description', resumo);
  setLink('canonical', pageUrl);
  setMeta('og:title', pageTitle, 'property');
  setMeta('og:description', resumo, 'property');
  setMeta('og:url', pageUrl, 'property');
  setMeta('og:image', SITE.origin + '/' + productPhoto(product, product.cover || 1), 'property');

  /* ---------- conteúdo ---------- */
  var categoryUrl = buildCategoryUrl(product.category);
  var waUrl = buildWhatsAppUrl(
    'Olá! Tenho interesse na peça "' + product.name + '" para o câmbio ' +
    product.transmission + '. Ainda tem disponível?'
  );
  var altBase = product.name + ' para câmbio ' + product.category;
  var capa = product.cover || 1;

  var miniaturas = '';
  if (product.photos > 1) {
    var itens = [];
    for (var i = 1; i <= product.photos; i++) {
      itens.push(
        '<button type="button" class="gallery-thumb' + (i === capa ? ' is-active' : '') + '" ' +
          'data-photo="' + escapeHtml(productPhoto(product, i)) + '" ' +
          'aria-label="Ver foto ' + i + ' de ' + product.photos + '">' +
          '<img src="' + escapeHtml(productPhoto(product, i)) + '" loading="lazy" alt="" />' +
        '</button>'
      );
    }
    miniaturas = '<div class="gallery-strip" role="group" aria-label="Fotos da peça">' + itens.join('') + '</div>';
  }

  var specs =
    '<div>' +
      '<dt>Transmissão</dt>' +
      '<dd>' + escapeHtml(product.transmission) + '</dd>' +
    '</div>' +
    (product.application
      ? '<div><dt>Aplicação</dt><dd>' + escapeHtml(product.application) + '</dd></div>'
      : '') +
    '<div>' +
      '<dt>Categoria</dt>' +
      '<dd><a href="' + escapeHtml(categoryUrl) + '">' + escapeHtml(product.category) + '</a></dd>' +
    '</div>' +
    (product.condition
      ? '<div><dt>Condição</dt><dd><span class="badge badge--original">' +
        escapeHtml(product.condition) + '</span></dd></div>'
      : '') +
    '<div><dt>Disponibilidade</dt><dd>Sob consulta — confirmamos no atendimento</dd></div>';

  container.innerHTML =
    '<nav class="breadcrumbs" aria-label="Você está em">' +
      '<a href="index.html">Início</a>' +
      '<span class="sep" aria-hidden="true">/</span>' +
      '<a href="loja.html">Catálogo</a>' +
      '<span class="sep" aria-hidden="true">/</span>' +
      '<a href="' + escapeHtml(categoryUrl) + '">' + escapeHtml(product.category) + '</a>' +
      '<span class="sep" aria-hidden="true">/</span>' +
      '<span class="current">' + escapeHtml(product.name) + '</span>' +
    '</nav>' +

    '<div class="product-detail">' +
      '<div class="product-gallery">' +
        '<div class="product-media">' +
          '<img id="product-photo" src="' + escapeHtml(productPhoto(product, capa)) + '" ' +
            'alt="' + escapeHtml(altBase) + '" fetchpriority="high" />' +
        '</div>' +
        miniaturas +
        (product.photos > 1
          ? '<p class="gallery-hint">' + product.photos + ' fotos desta peça</p>'
          : '') +
      '</div>' +

      '<div>' +
        '<div class="product-headline">' +
          '<h1>' + escapeHtml(product.name) + '</h1>' +
          '<p class="product-ref">Ref. ' + escapeHtml(product.id.toUpperCase()) + '</p>' +
        '</div>' +

        '<p class="product-short">' +
          escapeHtml(product.name) + ' para transmissão automática ' +
          escapeHtml(product.transmission) + '.' +
          (product.application ? ' Aplicação em ' + escapeHtml(product.application) + '.' : '') +
        '</p>' +

        '<dl class="spec-list">' + specs + '</dl>' +

        '<div class="product-actions">' +
          '<a class="btn btn-wa" href="' + escapeHtml(waUrl) + '" target="_blank" rel="noopener">' +
            '<i class="fa-brands fa-whatsapp" aria-hidden="true"></i> Orçamento no WhatsApp</a>' +
          '<a class="btn btn-outline" href="tel:' + escapeHtml(SITE.phoneTel) + '">' +
            '<i class="fa-solid fa-phone" aria-hidden="true"></i> ' + escapeHtml(SITE.phoneDisplay) + '</a>' +
        '</div>' +
      '</div>' +
    '</div>';

  /* ---------- galeria ---------- */
  var foto = document.getElementById('product-photo');
  var strip = container.querySelector('.gallery-strip');
  if (strip && foto) {
    strip.addEventListener('click', function (e) {
      var botao = e.target.closest('.gallery-thumb');
      if (!botao) return;
      foto.src = botao.getAttribute('data-photo');
      var ativos = strip.querySelectorAll('.gallery-thumb');
      for (var i = 0; i < ativos.length; i++) ativos[i].classList.remove('is-active');
      botao.classList.add('is-active');
    });
  }

  /* ---------- peças relacionadas ---------- */
  var related = getRelatedProducts(product, 4);
  var relatedSection = document.getElementById('related-section');
  var relatedGrid = document.getElementById('related-grid');
  var relatedTitle = document.getElementById('related-title');

  if (related.length && relatedSection && relatedGrid) {
    if (relatedTitle) {
      relatedTitle.textContent = related[0].category === product.category
        ? 'Outras peças para ' + product.category
        : 'Outras peças do catálogo';
    }
    relatedGrid.innerHTML = related.map(productCardHtml).join('');
    relatedSection.hidden = false;
  }

  /* ---------- dados estruturados ---------- */
  var fotos = [];
  for (var f = 1; f <= product.photos; f++) fotos.push(SITE.origin + '/' + productPhoto(product, f));

  addJsonLd({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Product',
        name: product.name,
        description: resumo,
        sku: product.id.toUpperCase(),
        category: product.category,
        url: pageUrl,
        image: fotos,
        itemCondition: 'https://schema.org/UsedCondition'
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: SITE.origin + '/' },
          { '@type': 'ListItem', position: 2, name: 'Catálogo', item: SITE.origin + '/loja.html' },
          { '@type': 'ListItem', position: 3, name: product.category, item: SITE.origin + '/' + categoryUrl },
          { '@type': 'ListItem', position: 4, name: product.name, item: pageUrl }
        ]
      }
    ]
  });

  /* ---------- utilitários de <head> ---------- */
  function setMeta(name, content, attr) {
    var key = attr || 'name';
    var tag = document.head.querySelector('meta[' + key + '="' + name + '"]');
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute(key, name);
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', content);
  }

  function setLink(rel, href) {
    var tag = document.head.querySelector('link[rel="' + rel + '"]');
    if (!tag) {
      tag = document.createElement('link');
      tag.setAttribute('rel', rel);
      document.head.appendChild(tag);
    }
    tag.setAttribute('href', href);
  }

  function addJsonLd(data) {
    var script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }
})();
