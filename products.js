/* ============================================================
   products.js — catálogo de peças da CAAMBIOCWB
   ============================================================

   COMO ADICIONAR UM PRODUTO
     1. Copie um bloco { ... } abaixo e cole no final do array PRODUCTS.
     2. Preencha os campos. "id" precisa ser ÚNICO (só letras minúsculas,
        números e hífen) e "category" precisa bater EXATAMENTE com um
        item do array CATEGORIES.

   COMO REMOVER
     Apague o bloco { ... } inteiro, incluindo a vírgula do final.

   CAMPOS
     id                identificador único e permanente ("bomba-oleo-6t30").
                       É o que aparece na URL — não mude depois de publicado.
     name              nome exibido no card e no título da página.
     category          transmissão/modelo a que a peça pertence.
     condition         "Nova" | "Original" | "Revisada" | "Usada revisada"
     applications      lista de veículos onde a peça é aplicada (pode ser []).
     icon              ícone Font Awesome usado enquanto não houver foto.
     image             (opcional) caminho da foto, ex: "assets/produtos/bomba.jpg".
                       Assim que existir, a foto substitui o ícone sozinha.
     shortDescription  uma linha, aparece na busca e na prévia.
     longDescription   texto completo da página do produto.

   O telefone e o WhatsApp NÃO ficam aqui — estão em site.js.
   ============================================================ */

/* Transmissões atendidas. A loja mostra todas na barra lateral,
   marcando quais já têm peça cadastrada. */
var CATEGORIES = [
  '09G / AQ160 / AQ250 (6 SP FWD)',
  '4EAT',
  '4F27E (4 SP FWD)',
  '4T40 - CAPTIVA',
  '6F35 (6 SP F/AWD)',
  '6R80',
  '8HP45 (8 SP R/4WD)',
  '9HP48 (9 SP F/4WD)',
  'A4CF1/2 - I30 (2.0)',
  'A6GF1 / A6GF1-2',
  'A6MF1 - IX35',
  'AL4 (4 SP FWD)',
  'AW5040LE (4 SP FWD)',
  'AW5550SN / AW5551SN (5 SP FWD)',
  'CAMBIO 6T30',
  'CAMBIO 6T31',
  'COROLLA - A240 / A245E',
  'COROLLA - K112',
  'COROLLA - K313',
  'COROLLA - U240E / U241E',
  'COROLLA - U341',
  'COROLLA K120',
  'FORD - 6F15 (KA/ECOSPORT)',
  'FORD TERRITORY',
  'HONDA (CITY, FIT, WRV) MODERNO',
  'HONDA CIVIC (2.0 CVT)',
  'HR-V (CVT)',
  'JF-015 (RENAULT)',
  'JF011',
  'K114 (CVT F/4WD)',
  'K310 FIAT 1.3',
  'RE4F03A - NISSAN',
  'TF-72',
  'TF70SC / TF71SC /TF72SC AT6 (6 SP FWD)',
  'TF81SC (6 SP F/4WD)',
  'U442E (4 SP FWD)',
  'V4A51'
];

var PRODUCTS = [
  {
    id: 'bomba-oleo-6t30',
    name: 'Bomba de Óleo',
    category: 'CAMBIO 6T30',
    condition: 'Revisada',
    applications: ['GM Onix', 'GM Cobalt', 'GM Cruze'],
    icon: 'fa-gear',
    shortDescription: 'Bomba de óleo revisada e testada para câmbio 6T30.',
    longDescription: 'Bomba de óleo para câmbio automático 6T30, totalmente revisada em nossa oficina e testada antes do envio. Indicada para GM Onix, Cobalt, Cruze e similares. Acompanha garantia mediante instalação em oficina especializada.'
  },
  {
    id: 'corpo-valvula-6t30',
    name: 'Corpo de Válvula',
    category: 'CAMBIO 6T30',
    condition: 'Revisada',
    applications: [],
    icon: 'fa-sliders',
    shortDescription: 'Corpo de válvula completo para câmbio 6T30.',
    longDescription: 'Corpo de válvula completo para câmbio 6T30 com todos os solenoides testados individualmente. Peça revisada e pronta para instalação, acompanha óleo de teste e relatório dos componentes.'
  },
  {
    id: 'carter-6t30',
    name: 'Cárter',
    category: 'CAMBIO 6T30',
    condition: 'Original',
    applications: [],
    icon: 'fa-box',
    shortDescription: 'Cárter original para câmbio 6T30.',
    longDescription: 'Cárter original com ímã coletor para câmbio 6T30. Peça em ótimo estado, limpa e pronta para montagem. Ideal para oficinas e retíficas de câmbio automático.'
  },
  {
    id: 'discos-4eat',
    name: 'Kit de Discos',
    category: '4EAT',
    condition: 'Nova',
    applications: [],
    icon: 'fa-compact-disc',
    shortDescription: 'Kit de discos de embreagem para câmbio 4EAT.',
    longDescription: 'Kit completo de discos de embreagem para câmbio 4EAT. Produto novo, lacrado, com especificações de fábrica. Indicado para retífica completa da transmissão.'
  },
  {
    id: 'planetaria-4eat',
    name: 'Planetária',
    category: '4EAT',
    condition: 'Usada revisada',
    applications: [],
    icon: 'fa-circle-nodes',
    shortDescription: 'Conjunto planetário para câmbio 4EAT.',
    longDescription: 'Conjunto planetário completo para câmbio 4EAT, revisado e inspecionado. Engrenagens sem desgaste perceptível, pronto para aplicação. Peça usada em ótimo estado.'
  },
  {
    id: 'estator-4f27e',
    name: 'Estator',
    category: '4F27E (4 SP FWD)',
    condition: 'Revisada',
    applications: ['Ford', 'Mazda'],
    icon: 'fa-fan',
    shortDescription: 'Estator do conversor de torque para câmbio 4F27E.',
    longDescription: 'Estator do conversor de torque para câmbio 4F27E. Peça revisada, sem folga no eixo, pronta para instalação. Aplicação em veículos Ford e Mazda.'
  },
  {
    id: 'chicote-6r80',
    name: 'Chicote Elétrico',
    category: '6R80',
    condition: 'Nova',
    applications: ['Ford F-150', 'Ford Mustang'],
    icon: 'fa-plug',
    shortDescription: 'Chicote elétrico interno para câmbio 6R80.',
    longDescription: 'Chicote elétrico interno (valve body harness) para câmbio 6R80. Peça nova, com conectores originais e fiação completa. Aplicação em Ford F-150, Mustang e similares.'
  },
  {
    id: 'tambor-entrada-6r80',
    name: 'Tambor de Entrada',
    category: '6R80',
    condition: 'Revisada',
    applications: [],
    icon: 'fa-record-vinyl',
    shortDescription: 'Tambor de entrada revisado para câmbio 6R80.',
    longDescription: 'Tambor de entrada completo para câmbio 6R80, revisado com discos e molas novos. Testado em bancada e pronto para aplicação.'
  },
  {
    id: 'conjunto-planetario-territory',
    name: 'Conjunto Planetário',
    category: 'FORD TERRITORY',
    condition: 'Revisada',
    applications: ['Ford Territory'],
    icon: 'fa-gears',
    shortDescription: 'Conjunto planetário para o câmbio do Ford Territory.',
    longDescription: 'Conjunto planetário completo para câmbio do Ford Territory. Peça revisada, com engrenagens e rolamentos em ótimo estado, pronta para montagem.'
  },
  {
    id: 'conjunto-diferencial-al4',
    name: 'Conjunto Diferencial',
    category: 'AL4 (4 SP FWD)',
    condition: 'Usada revisada',
    applications: ['Peugeot', 'Citroën', 'Renault'],
    icon: 'fa-sitemap',
    shortDescription: 'Conjunto diferencial para câmbio AL4 / DP0.',
    longDescription: 'Conjunto diferencial completo para câmbio AL4 / DP0. Aplicação em Peugeot, Citroën e Renault. Peça usada revisada, com engrenagens em ótimo estado.'
  },
  {
    id: 'eixo-direta-jf011',
    name: 'Eixo Direta',
    category: 'JF011',
    condition: 'Revisada',
    applications: ['Nissan Sentra', 'Nissan Versa', 'Renault Fluence', 'Mitsubishi Lancer'],
    icon: 'fa-arrow-right-arrow-left',
    shortDescription: 'Eixo direta para câmbio JF011 CVT.',
    longDescription: 'Eixo direta para câmbio JF011 CVT. Aplicação em Nissan Sentra, Versa, Renault Fluence e Mitsubishi Lancer. Peça revisada com rolamentos em bom estado.'
  },
  {
    id: 'defletor-v4a51',
    name: 'Defletor',
    category: 'V4A51',
    condition: 'Original',
    applications: ['Mitsubishi Pajero', 'Mitsubishi L200', 'Hyundai Terracan'],
    icon: 'fa-shield-halved',
    shortDescription: 'Defletor de óleo para câmbio V4A51.',
    longDescription: 'Defletor de óleo para câmbio V4A51. Aplicação em Mitsubishi Pajero, L200 e Hyundai Terracan. Peça original, pronta para instalação.'
  },
  {
    id: 'protetor-oleo-tf81',
    name: 'Protetor de Óleo',
    category: 'TF81SC (6 SP F/4WD)',
    condition: 'Nova',
    applications: [],
    icon: 'fa-droplet',
    shortDescription: 'Protetor de óleo (filtro interno) para câmbio TF81SC.',
    longDescription: 'Protetor de óleo (filtro interno) para câmbio TF81SC. Peça nova, indicada para troca durante a revisão completa da transmissão.'
  },
  {
    id: 'prato-mola-a6gf1',
    name: 'Prato Mola',
    category: 'A6GF1 / A6GF1-2',
    condition: 'Revisada',
    applications: ['Hyundai', 'Kia'],
    icon: 'fa-layer-group',
    shortDescription: 'Prato mola para câmbio Hyundai/Kia A6GF1.',
    longDescription: 'Prato mola para câmbio Hyundai/Kia A6GF1 e A6GF1-2. Peça em ótimo estado, testada e pronta para aplicação em retífica.'
  },
  {
    id: 'conjunto-pulia-hrv',
    name: 'Conjunto Pulia CVT',
    category: 'HR-V (CVT)',
    condition: 'Revisada',
    applications: ['Honda HR-V'],
    icon: 'fa-circle-dot',
    shortDescription: 'Conjunto de pulias para o CVT do Honda HR-V.',
    longDescription: 'Conjunto completo de pulias (driver e driven) para câmbio CVT do Honda HR-V. Peça revisada, com correia em bom estado, pronta para montagem.'
  }
];

/* ============================================================
   Consultas ao catálogo — não precisa mexer daqui para baixo
   ============================================================ */

function getProductById(id) {
  for (var i = 0; i < PRODUCTS.length; i++) {
    if (PRODUCTS[i].id === id) return PRODUCTS[i];
  }
  return null;
}

function getProductsByCategory(category) {
  if (!category || category === 'all') return PRODUCTS.slice();
  return PRODUCTS.filter(function (p) { return p.category === category; });
}

/* Quantas peças existem em cada transmissão — usado para mostrar o
   número ao lado da categoria e apagar as que ainda estão vazias. */
function countByCategory() {
  var counts = {};
  for (var i = 0; i < PRODUCTS.length; i++) {
    counts[PRODUCTS[i].category] = (counts[PRODUCTS[i].category] || 0) + 1;
  }
  return counts;
}

/* Busca sem acento e sem diferenciar maiúsculas, olhando nome,
   categoria, aplicação e descrição. */
function normalizeText(value) {
  var text = String(value).toLowerCase();
  if (text.normalize) text = text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  return text;
}

function searchProducts(list, query) {
  var terms = normalizeText(query).split(/\s+/).filter(Boolean);
  if (!terms.length) return list.slice();

  return list.filter(function (p) {
    var haystack = normalizeText(
      [p.name, p.category, p.condition, p.shortDescription, p.applications.join(' ')].join(' ')
    );
    return terms.every(function (term) { return haystack.indexOf(term) >= 0; });
  });
}

/* Peças da mesma transmissão; completa com outras se faltar. */
function getRelatedProducts(product, limit) {
  var max = limit || 3;
  var sameCategory = PRODUCTS.filter(function (p) {
    return p.category === product.category && p.id !== product.id;
  });
  if (sameCategory.length >= max) return sameCategory.slice(0, max);

  var others = PRODUCTS.filter(function (p) {
    return p.category !== product.category && p.id !== product.id;
  });
  return sameCategory.concat(others.slice(0, max - sameCategory.length));
}

function buildProductUrl(productId) {
  return 'produto.html?id=' + encodeURIComponent(productId);
}

function buildCategoryUrl(category) {
  return 'loja.html?transmissao=' + encodeURIComponent(category);
}

/* Cor da tarja de condição da peça. */
var CONDITION_CLASS = {
  'Nova': 'badge--new',
  'Original': 'badge--original',
  'Revisada': 'badge--revised',
  'Usada revisada': 'badge--revised'
};

/* Card usado na loja e na lista de peças relacionadas. */
function productCardHtml(p) {
  var media = p.image
    ? '<img src="' + escapeHtml(p.image) + '" alt="' + escapeHtml(p.name) + '" loading="lazy" />'
    : '<i class="fa-solid ' + escapeHtml(p.icon || 'fa-gear') + '" aria-hidden="true"></i>';

  return '<a class="product" href="' + escapeHtml(buildProductUrl(p.id)) + '">' +
    '<div class="thumb">' +
      (p.condition
        ? '<span class="badge ' + (CONDITION_CLASS[p.condition] || '') + '">' + escapeHtml(p.condition) + '</span>'
        : '') +
      media +
    '</div>' +
    '<div class="product-body">' +
      '<h2>' + escapeHtml(p.name) + '</h2>' +
      '<p class="product-cat-tag">' + escapeHtml(p.category) + '</p>' +
      '<span class="product-cta">Ver detalhes <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></span>' +
    '</div>' +
  '</a>';
}
