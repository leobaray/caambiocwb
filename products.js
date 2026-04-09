// ============================================================
// products.js — Catálogo de produtos CAAMBIOCWB
// ============================================================
//
// COMO ADICIONAR UM PRODUTO:
//   1. Copie um bloco abaixo (entre as chaves { ... })
//   2. Cole no final do array PRODUCTS
//   3. Preencha os campos — "id" tem que ser ÚNICO (só letras,
//      números e hifen) e "category" tem que bater EXATAMENTE
//      com algum item do array CATEGORIES.
//
// COMO EDITAR: altere os campos do produto no array abaixo.
//
// COMO REMOVER: apague o bloco inteiro { ... }, incluindo a
// vírgula do final, e o produto some da loja.
//
// CAMPOS DE UM PRODUTO:
//   id                — identificador único ("bomba-oleo-6t30")
//   name              — nome que aparece no card e no título
//   category          — transmissão/modelo a que pertence
//   icon              — classe Font Awesome (ex: "fa-gear")
//                       usada se não houver imagem
//   image             — (opcional) caminho pra foto do produto
//                       ex: "produtos/bomba.jpg"
//   shortDescription  — texto curto usado no card da loja
//   longDescription   — texto completo usado na página do produto
//
// ============================================================

// Número de WhatsApp (formato internacional, sem + nem espaços)
const WHATSAPP_NUMBER = "5541996939384";

// Lista de categorias / transmissões que aparecem na sidebar
const CATEGORIES = [
  "09G / AQ160 / AQ250 (6 SP FWD)",
  "4EAT",
  "4F27E (4 SP FWD)",
  "4T40 - CAPTIVA",
  "6F35 (6 SP F/AWD)",
  "6R80",
  "8HP45 (8 SP R/4WD)",
  "9HP48 (9 SP F/4WD)",
  "A4CF1/2 - I30 (2.0)",
  "A6GF1 / A6GF1-2",
  "A6MF1 - IX35",
  "AL4 (4 SP FWD)",
  "AW5040LE (4 SP FWD)",
  "AW5550SN / AW5551SN (5 SP FWD)",
  "CAMBIO 6T30",
  "CAMBIO 6T31",
  "COROLLA - A240 / A245E",
  "COROLLA - K112",
  "COROLLA - K313",
  "COROLLA - U240E / U241E",
  "COROLLA - U341",
  "COROLLA K120",
  "FORD - 6F15 (KA/ECOSPORT)",
  "FORD TERRITORY",
  "HONDA (CITY, FIT, WRV) MODERNO",
  "HONDA CIVIC (2.0 CVT)",
  "HR-V (CVT)",
  "JF-015 (RENAULT)",
  "JF011",
  "K114 (CVT F/4WD)",
  "K310 FIAT 1.3",
  "RE4F03A - NISSAN",
  "TF-72",
  "TF70SC / TF71SC /TF72SC AT6 (6 SP FWD)",
  "TF81SC (6 SP F/4WD)",
  "U442E (4 SP FWD)",
  "V4A51"
];

// Catálogo de produtos
const PRODUCTS = [
  {
    id: "bomba-oleo-6t30",
    name: "Bomba de Óleo",
    category: "CAMBIO 6T30",
    icon: "fa-gear",
    shortDescription: "Bomba de óleo revisada e testada para câmbio 6T30.",
    longDescription: "Bomba de óleo para câmbio automático 6T30, totalmente revisada em nossa oficina e testada antes do envio. Indicada para GM Onix, Cobalt, Cruze e similares. Acompanha garantia mediante instalação em oficina especializada."
  },
  {
    id: "corpo-valvula-6t30",
    name: "Corpo de Válvula",
    category: "CAMBIO 6T30",
    icon: "fa-sliders",
    shortDescription: "Corpo de válvula completo para câmbio 6T30.",
    longDescription: "Corpo de válvula completo para câmbio 6T30 com todos os solenoides testados individualmente. Peça revisada e pronta para instalação, acompanha óleo de teste e relatório dos componentes."
  },
  {
    id: "carter-6t30",
    name: "Cárter",
    category: "CAMBIO 6T30",
    icon: "fa-box",
    shortDescription: "Cárter original para câmbio 6T30.",
    longDescription: "Cárter original com ímã coletor para câmbio 6T30. Peça em ótimo estado, limpa e pronta para montagem. Ideal para oficinas e retíficas de câmbio automático."
  },
  {
    id: "discos-4eat",
    name: "Kit de Discos",
    category: "4EAT",
    icon: "fa-compact-disc",
    shortDescription: "Kit de discos de embreagem para câmbio 4EAT.",
    longDescription: "Kit completo de discos de embreagem para câmbio 4EAT. Produto novo, lacrado, com especificações de fábrica. Indicado para retífica completa da transmissão."
  },
  {
    id: "planetaria-4eat",
    name: "Planetária",
    category: "4EAT",
    icon: "fa-circle-nodes",
    shortDescription: "Conjunto planetário para câmbio 4EAT.",
    longDescription: "Conjunto planetário completo para câmbio 4EAT, revisado e inspecionado. Engrenagens sem desgaste perceptível, pronto para aplicação. Peça usada em ótimo estado."
  },
  {
    id: "estator-4f27e",
    name: "Estator",
    category: "4F27E (4 SP FWD)",
    icon: "fa-fan",
    shortDescription: "Estator para câmbio 4F27E.",
    longDescription: "Estator do conversor de torque para câmbio 4F27E. Peça revisada, sem folga no eixo, pronta para instalação. Aplicação em veículos Ford e Mazda."
  },
  {
    id: "chicote-6r80",
    name: "Chicote Elétrico",
    category: "6R80",
    icon: "fa-plug",
    shortDescription: "Chicote elétrico interno para câmbio 6R80.",
    longDescription: "Chicote elétrico interno (valve body harness) para câmbio 6R80. Peça nova, com conectores originais e fiação completa. Aplicação em Ford F-150, Mustang e similares."
  },
  {
    id: "tambor-entrada-6r80",
    name: "Tambor de Entrada",
    category: "6R80",
    icon: "fa-record-vinyl",
    shortDescription: "Tambor de entrada para câmbio 6R80.",
    longDescription: "Tambor de entrada completo para câmbio 6R80, revisado com discos e molas novos. Testado em bancada e pronto para aplicação."
  },
  {
    id: "conjunto-planetario-territory",
    name: "Conjunto Planetário",
    category: "FORD TERRITORY",
    icon: "fa-gears",
    shortDescription: "Conjunto planetário para Ford Territory.",
    longDescription: "Conjunto planetário completo para câmbio do Ford Territory. Peça revisada, com engrenagens e rolamentos em ótimo estado, pronta para montagem."
  },
  {
    id: "conjunto-diferencial-al4",
    name: "Conjunto Diferencial",
    category: "AL4 (4 SP FWD)",
    icon: "fa-sitemap",
    shortDescription: "Conjunto diferencial para câmbio AL4.",
    longDescription: "Conjunto diferencial completo para câmbio AL4 / DP0. Aplicação em Peugeot, Citroën e Renault. Peça usada revisada, com engrenagens em ótimo estado."
  },
  {
    id: "eixo-direta-jf011",
    name: "Eixo Direta",
    category: "JF011",
    icon: "fa-arrow-right-arrow-left",
    shortDescription: "Eixo direta para câmbio JF011 CVT.",
    longDescription: "Eixo direta para câmbio JF011 CVT. Aplicação em Nissan Sentra, Versa, Renault Fluence e Mitsubishi Lancer. Peça revisada com rolamentos em bom estado."
  },
  {
    id: "defletor-v4a51",
    name: "Defletor",
    category: "V4A51",
    icon: "fa-shield-halved",
    shortDescription: "Defletor para câmbio V4A51.",
    longDescription: "Defletor de óleo para câmbio V4A51. Aplicação em Mitsubishi Pajero, L200 e Hyundai Terracan. Peça original, pronta para instalação."
  },
  {
    id: "protetor-oleo-tf81",
    name: "Protetor de Óleo",
    category: "TF81SC (6 SP F/4WD)",
    icon: "fa-droplet",
    shortDescription: "Protetor de óleo para câmbio TF81SC.",
    longDescription: "Protetor de óleo (filtro interno) para câmbio TF81SC. Peça nova, indicada para troca durante a revisão completa da transmissão."
  },
  {
    id: "prato-mola-a6gf1",
    name: "Prato Mola",
    category: "A6GF1 / A6GF1-2",
    icon: "fa-layer-group",
    shortDescription: "Prato mola para câmbio A6GF1.",
    longDescription: "Prato mola para câmbio Hyundai/Kia A6GF1 e A6GF1-2. Peça em ótimo estado, testada e pronta para aplicação em retífica."
  },
  {
    id: "conjunto-pulia-hrv",
    name: "Conjunto Pulia CVT",
    category: "HR-V (CVT)",
    icon: "fa-circle-dot",
    shortDescription: "Conjunto de pulias para CVT do Honda HR-V.",
    longDescription: "Conjunto completo de pulias (driver e driven) para câmbio CVT do Honda HR-V. Peça revisada, com correia em bom estado, pronta para montagem."
  }
];

// ============================================================
// Funções auxiliares — não precisa mexer aqui
// ============================================================

function getProductById(id) {
  return PRODUCTS.find(function (p) { return p.id === id; });
}

function getProductsByCategory(category) {
  if (!category || category === "all") return PRODUCTS.slice();
  return PRODUCTS.filter(function (p) { return p.category === category; });
}

function buildWhatsAppUrl(productName) {
  var msg = "Olá! Tenho interesse em falar sobre a peça: " + productName + ".";
  return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(msg);
}

function buildProductUrl(productId) {
  return "produto.html?id=" + encodeURIComponent(productId);
}
