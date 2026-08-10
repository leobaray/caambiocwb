/* ============================================================
   produto.js — página de uma peça
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

  document.title = pageTitle;
  setMeta('description', product.shortDescription + ' Peça ' + product.condition.toLowerCase() +
    ' para câmbio ' + product.category + '. Orçamento pelo WhatsApp.');
  setLink('canonical', pageUrl);
  setMeta('og:title', pageTitle, 'property');
  setMeta('og:description', product.shortDescription, 'property');
  setMeta('og:url', pageUrl, 'property');

  /* ---------- conteúdo ---------- */
  var categoryUrl = buildCategoryUrl(product.category);
  var waUrl = buildWhatsAppUrl(
    'Olá! Tenho interesse na peça "' + product.name + '" para o câmbio ' + product.category + '. Ainda tem disponível?'
  );

  var media = product.image
    ? '<img src="' + escapeHtml(product.image) + '" alt="' + escapeHtml(product.name) + '" />'
    : '<i class="fa-solid ' + escapeHtml(product.icon || 'fa-gear') + '" aria-hidden="true"></i>';

  var specs =
    '<div>' +
      '<dt>Transmissão</dt>' +
      '<dd><a href="' + escapeHtml(categoryUrl) + '">' + escapeHtml(product.category) + '</a></dd>' +
    '</div>' +
    '<div>' +
      '<dt>Condição</dt>' +
      '<dd><span class="badge ' + (CONDITION_CLASS[product.condition] || '') + '">' +
        escapeHtml(product.condition) + '</span></dd>' +
    '</div>' +
    (product.applications && product.applications.length
      ? '<div><dt>Aplicação</dt><dd>' + escapeHtml(product.applications.join(' · ')) + '</dd></div>'
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
      '<div class="product-media">' + media + '</div>' +

      '<div>' +
        '<div class="product-headline">' +
          '<h1>' + escapeHtml(product.name) + '</h1>' +
          '<p class="product-ref">Ref. ' + escapeHtml(product.id.toUpperCase()) + '</p>' +
        '</div>' +

        '<p class="product-short">' + escapeHtml(product.shortDescription) + '</p>' +

        '<dl class="spec-list">' + specs + '</dl>' +

        '<div class="product-long"><p>' + escapeHtml(product.longDescription) + '</p></div>' +

        '<div class="product-actions">' +
          '<a class="btn btn-wa" href="' + escapeHtml(waUrl) + '" target="_blank" rel="noopener">' +
            '<i class="fa-brands fa-whatsapp" aria-hidden="true"></i> Orçamento no WhatsApp</a>' +
          '<a class="btn btn-outline" href="tel:' + escapeHtml(SITE.phoneTel) + '">' +
            '<i class="fa-solid fa-phone" aria-hidden="true"></i> ' + escapeHtml(SITE.phoneDisplay) + '</a>' +
        '</div>' +
      '</div>' +
    '</div>';

  /* ---------- peças relacionadas ---------- */
  var related = getRelatedProducts(product, 3);
  var relatedSection = document.getElementById('related-section');
  var relatedGrid = document.getElementById('related-grid');
  var relatedTitle = document.getElementById('related-title');

  if (related.length && relatedSection && relatedGrid) {
    var sameCategory = related[0].category === product.category;
    if (relatedTitle) {
      relatedTitle.textContent = sameCategory
        ? 'Outras peças para ' + product.category
        : 'Outras peças do catálogo';
    }
    relatedGrid.innerHTML = related.map(productCardHtml).join('');
    relatedSection.hidden = false;
  }

  /* ---------- dados estruturados ---------- */
  addJsonLd({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Product',
        name: product.name,
        description: product.longDescription,
        sku: product.id.toUpperCase(),
        category: product.category,
        url: pageUrl,
        image: SITE.origin + '/assets/og-caambiocwb.jpg',
        itemCondition: product.condition === 'Nova'
          ? 'https://schema.org/NewCondition'
          : 'https://schema.org/RefurbishedCondition'
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
