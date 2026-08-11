/* ============================================================
   products.js — catálogo de peças da CAAMBIOCWB
   ============================================================

   Este arquivo foi montado a partir do catálogo publicado em
   caambiocwb.com.br. São 347 peças e 1.138 fotos.

   COMO ADICIONAR UMA PEÇA
     Copie um bloco { ... } abaixo, cole no final do array PRODUCTS
     e preencha os campos. O "id" precisa ser ÚNICO (só letras
     minúsculas, números e hífen) — é ele que aparece na URL e é ele
     que dá o nome da pasta das fotos.

   COMO COLOCAR AS FOTOS
     Crie a pasta assets/produtos/<id>/ e coloque os arquivos
     numerados: 01.avif, 02.avif, 03.avif... A foto 01 precisa ter
     também a versão pequena 01-thumb.avif (400px), que é a que
     aparece no card da loja. Depois é só ajustar o campo "photos"
     para a quantidade de fotos.

   CAMPOS
     id            identificador único e permanente; não mude depois
                   de publicado (quebra o link e o caminho das fotos).
     name          nome exibido no card e no título da página.
     category      transmissão a que a peça pertence; precisa bater
                   EXATAMENTE com um item de CATEGORIES.
     transmission  código da transmissão como o cliente procura.
     application   veículo/ano/motor, quando o cadastro informa.
     condition     "Original" quando é peça original.
     photos        quantidade de fotos na pasta da peça.
     cover         (opcional) número da foto usada como capa no card,
                   quando a foto 01 é um print com legenda. A foto de
                   capa precisa ter a versão NN-thumb.avif.

   O telefone e o WhatsApp NÃO ficam aqui — estão em site.js.
   ============================================================ */

/* Transmissões atendidas. Aparecem todas na barra lateral da loja,
   com o número de peças cadastradas ao lado. */
var CATEGORIES = [
  '09G / AQ160 / AQ250 (6 SP FWD)',
  '4EAT',
  '4F27E (4 SP FWD)',
  '4L60E',
  '4T40 - CAPTIVA',
  '6F35 (6 SP F/AWD)',
  '6HP26',
  '6HP28',
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
  'TF70SC / TF71SC /TF72SC  AT6 (6 SP FWD)',
  'TF81SC (6 SP F/4WD)',
  'U442E (4 SP FWD)',
  'V4A51'
];

var PRODUCTS = [
  {
    id: 'bomba-oleo-virtus',
    name: 'Bomba Óleo - Virtus',
    category: '09G / AQ160 / AQ250 (6 SP FWD)',
    transmission: '09G / AQ160 / AQ250 (6 SP FWD)',
    condition: 'Original',
    photos: 4
  },
  {
    id: 'carcaca-da-embreagem-k2',
    name: 'Carcaça da Embreagem K2',
    category: '09G / AQ160 / AQ250 (6 SP FWD)',
    transmission: '09G MODERNO',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'carcaca-de-freio-b1',
    name: 'Carcaça de Freio B1',
    category: '09G / AQ160 / AQ250 (6 SP FWD)',
    transmission: '09G MODERNO',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'carregador-planetario-dianteiro',
    name: 'Carregador Planetário Dianteiro',
    category: '09G / AQ160 / AQ250 (6 SP FWD)',
    transmission: '09G MODERNO',
    condition: 'Original',
    photos: 3,
    cover: 2
  },
  {
    id: 'conjunto-da-carcaca-da-embreagem-k3',
    name: 'Conjunto da Carcaça da Embreagem K3',
    category: '09G / AQ160 / AQ250 (6 SP FWD)',
    transmission: '09G MODERNO',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'conjunto-da-carcaca-embreagem-k1',
    name: 'Conjunto da Carcaça Embreagem K1',
    category: '09G / AQ160 / AQ250 (6 SP FWD)',
    transmission: '09G MODERNO',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'conjunto-de-eixo-de-entrada',
    name: 'Conjunto de Eixo de Entrada',
    category: '09G / AQ160 / AQ250 (6 SP FWD)',
    transmission: '09G MODERNO',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'conjunto-de-mola',
    name: 'Conjunto de Mola',
    category: '09G / AQ160 / AQ250 (6 SP FWD)',
    transmission: '09G MODERNO',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'conjunto-diferencial-5',
    name: 'Conjunto Diferencial',
    category: '09G / AQ160 / AQ250 (6 SP FWD)',
    transmission: '09G MODERNO',
    condition: 'Original',
    photos: 6,
    cover: 2
  },
  {
    id: 'conjunto-do-suporte-central',
    name: 'Conjunto do Suporte Central',
    category: '09G / AQ160 / AQ250 (6 SP FWD)',
    transmission: '09G MODERNO',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'conjunto-planetario-5',
    name: 'Conjunto Planetário',
    category: '09G / AQ160 / AQ250 (6 SP FWD)',
    transmission: '9HP48',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'corpo-de-valvula-2',
    name: 'Corpo de Válvula',
    category: '09G / AQ160 / AQ250 (6 SP FWD)',
    transmission: '09G MODERNO',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'corpo-valvula-com-start',
    name: 'Corpo Válvula (com Start)',
    category: '09G / AQ160 / AQ250 (6 SP FWD)',
    transmission: '09G MODERNO(COM START STOP)',
    condition: 'Original',
    photos: 4
  },
  {
    id: 'corpo-valvula-sem-start',
    name: 'Corpo Válvula (sem Start)',
    category: '09G / AQ160 / AQ250 (6 SP FWD)',
    transmission: '09G MODERNO(SEM START STOP)',
    condition: 'Original',
    photos: 5
  },
  {
    id: 'cuboo-acionamento-da-carcaca-embreagem-k3',
    name: 'Cubo Acionamento da Carcaça Embreagem K3',
    category: '09G / AQ160 / AQ250 (6 SP FWD)',
    transmission: '09G MODERNO',
    application: 'CUBOO ACIONAMENTO DA CARCAÇA EMBREAGEM K3',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'defletor-de-oleo',
    name: 'Defletor de Óleo',
    category: '09G / AQ160 / AQ250 (6 SP FWD)',
    transmission: '09G MODERNO',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'planetaria-traseira',
    name: 'Planetária Traseira',
    category: '09G / AQ160 / AQ250 (6 SP FWD)',
    transmission: '09G MODERNO',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'corpo-valvula-5',
    name: 'Corpo Válvula',
    category: '4EAT',
    transmission: '4EAT / 5EAT (4/5 SP 4WD)',
    condition: 'Original',
    photos: 4
  },
  {
    id: 'bomba-oleo-4f27e',
    name: 'Bomba Óleo - 4F27E',
    category: '4F27E (4 SP FWD)',
    transmission: '4F27e',
    condition: 'Original',
    photos: 6
  },
  {
    id: 'conjunto-diferencial-1',
    name: 'Conjunto Diferencial',
    category: '4F27E (4 SP FWD)',
    transmission: '4F27E (4 SP FWD)',
    condition: 'Original',
    photos: 6
  },
  {
    id: 'bomba-oleo-8',
    name: 'Bomba Óleo',
    category: '4L60E',
    transmission: '4L60e',
    condition: 'Original',
    photos: 3
  },
  {
    id: 'anelar-de-entrada',
    name: 'Anelar de Entrada',
    category: '4T40 - CAPTIVA',
    transmission: '4T40',
    condition: 'Original',
    photos: 5,
    cover: 3
  },
  {
    id: 'carregador-de-entrada',
    name: 'Carregador de Entrada',
    category: '4T40 - CAPTIVA',
    transmission: '4T40',
    condition: 'Original',
    photos: 3
  },
  {
    id: 'carregador-de-reacao',
    name: 'Carregador de Reação',
    category: '4T40 - CAPTIVA',
    transmission: '4T40',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'conjunto-embreagem-frente',
    name: 'Conjunto Embreagem Frente',
    category: '4T40 - CAPTIVA',
    transmission: '4T40',
    condition: 'Original',
    photos: 4,
    cover: 3
  },
  {
    id: 'carte-1',
    name: 'Cárter',
    category: '4T40 - CAPTIVA',
    transmission: '4T40',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'discos-engrenagem-re',
    name: 'Discos Engrenagem Ré',
    category: '4T40 - CAPTIVA',
    transmission: '4T40',
    condition: 'Original',
    photos: 3
  },
  {
    id: 'eixo-2',
    name: 'Eixo',
    category: '4T40 - CAPTIVA',
    transmission: '4T40',
    condition: 'Original',
    photos: 4
  },
  {
    id: 'eixo-solar-entrada',
    name: 'Eixo Solar Entrada',
    category: '4T40 - CAPTIVA',
    transmission: '4T40',
    condition: 'Original',
    photos: 4,
    cover: 2
  },
  {
    id: 'engrenagem-re-roda-livre',
    name: 'Engrenagem Ré Roda Livre',
    category: '4T40 - CAPTIVA',
    transmission: '4T40',
    condition: 'Original',
    photos: 6,
    cover: 2
  },
  {
    id: 'engrenagem-solar-1',
    name: 'Engrenagem Solar',
    category: '4T40 - CAPTIVA',
    transmission: '4T40',
    condition: 'Original',
    photos: 3
  },
  {
    id: 'servo-2-4-marcha',
    name: 'Servo 2/4 Marcha',
    category: '4T40 - CAPTIVA',
    transmission: '4T40',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'servo-baixo-e-re',
    name: 'Servo Baixo e Ré',
    category: '4T40 - CAPTIVA',
    transmission: '4T40',
    condition: 'Original',
    photos: 4
  },
  {
    id: 'solar',
    name: 'Solar',
    category: '4T40 - CAPTIVA',
    transmission: '4T40',
    condition: 'Original',
    photos: 3
  },
  {
    id: 'suporte-engrenagem-movida',
    name: 'Suporte Engrenagem Movida',
    category: '4T40 - CAPTIVA',
    transmission: '4T40',
    condition: 'Original',
    photos: 4
  },
  {
    id: 'valvula-controle-nivel',
    name: 'Válvula Controle Nível',
    category: '4T40 - CAPTIVA',
    transmission: '4T40',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'bomba-oleo-9',
    name: 'Bomba Óleo',
    category: '6F35 (6 SP F/AWD)',
    transmission: '6F35 (4X4)',
    condition: 'Original',
    photos: 3,
    cover: 2
  },
  {
    id: 'capa-seca',
    name: 'Capa Seca',
    category: '6F35 (6 SP F/AWD)',
    transmission: '6F35 (4X4)',
    condition: 'Original',
    photos: 4,
    cover: 2
  },
  {
    id: 'carter-2',
    name: 'Cárter',
    category: '6F35 (6 SP F/AWD)',
    transmission: '6F35 (4X4)',
    condition: 'Original',
    photos: 3,
    cover: 2
  },
  {
    id: 'engrenagem-estacionamento',
    name: 'Engrenagem Estacionamento',
    category: '6F35 (6 SP F/AWD)',
    transmission: '6F35 (4X4)',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'bomba-oleo-12',
    name: 'Bomba Óleo',
    category: '6HP26',
    transmission: '6HP26',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'corpo-valvula-6',
    name: 'Corpo Válvula',
    category: '6HP26',
    transmission: '6HP26',
    condition: 'Original',
    photos: 3
  },
  {
    id: 'tambor-central',
    name: 'Tambor Central',
    category: '6HP26',
    transmission: '6HP26',
    condition: 'Original',
    photos: 1
  },
  {
    id: 'tambor-embreagem',
    name: 'Tambor Embreagem',
    category: '6HP26',
    transmission: '6HP26',
    condition: 'Original',
    photos: 7
  },
  {
    id: 'bomba-oleo-13',
    name: 'Bomba Óleo',
    category: '6HP28',
    transmission: '6HP28',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'capa-shell-1',
    name: 'Capa Shell',
    category: '6HP28',
    transmission: '6HP28',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'corpo-valvula-12',
    name: 'Corpo Válvula',
    category: '6HP28',
    transmission: '6HP28',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'carcaca-tambor-embreagem-direta',
    name: 'Carcaça Tambor Embreagem Direta',
    category: '6R80',
    transmission: '6R80',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'cubo-embreagem-1',
    name: 'Cubo Embreagem',
    category: '6R80',
    transmission: '6R80',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'eixo-overdrive',
    name: 'Eixo Overdrive',
    category: '6R80',
    transmission: '6R80',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'eixo-saida',
    name: 'Eixo Saída',
    category: '6R80',
    transmission: '6R80',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'i-ntermediario-baixo-reserso',
    name: 'I Intermediário Baixo Reverso',
    category: '6R80',
    transmission: '6R80',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'planetario-traseira',
    name: 'Planetário Traseira',
    category: '6R80',
    transmission: '6R80',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'suporte-selenoide-com-parafuso',
    name: 'Suporte Solenoide com Parafuso',
    category: '6R80',
    transmission: '6R80',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'valvula-manual',
    name: 'Válvula Manual',
    category: '6R80',
    transmission: '6R80',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'corpo-valvula-bmw',
    name: 'Corpo Válvula - BMW',
    category: '8HP45 (8 SP R/4WD)',
    transmission: '8HP45',
    condition: 'Original',
    photos: 5
  },
  {
    id: 'carcaca-da-bomba',
    name: 'Carcaça da Bomba',
    category: '9HP48 (9 SP F/4WD)',
    transmission: '9HP48',
    condition: 'Original',
    photos: 3
  },
  {
    id: 'conjunto-diferencial-6',
    name: 'Conjunto Diferencial',
    category: '9HP48 (9 SP F/4WD)',
    transmission: '9HP48',
    condition: 'Original',
    photos: 4
  },
  {
    id: 'conjunto-diferencial-7',
    name: 'Conjunto Diferencial',
    category: '9HP48 (9 SP F/4WD)',
    transmission: '9HP48',
    condition: 'Original',
    photos: 4
  },
  {
    id: 'corpo-de-valvula-3',
    name: 'Corpo de Válvula',
    category: '9HP48 (9 SP F/4WD)',
    transmission: '9HP48',
    condition: 'Original',
    photos: 6
  },
  {
    id: 'cubo-embreagem',
    name: 'Cubo Embreagem',
    category: '9HP48 (9 SP F/4WD)',
    transmission: '9HP48',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'dog-f',
    name: 'DOG F',
    category: '9HP48 (9 SP F/4WD)',
    transmission: '9HP48',
    condition: 'Original',
    photos: 3
  },
  {
    id: 'eixo-de-entrada-1',
    name: 'Eixo de Entrada',
    category: '9HP48 (9 SP F/4WD)',
    transmission: '9HP48',
    condition: 'Original',
    photos: 4,
    cover: 3
  },
  {
    id: 'embreagem-solar',
    name: 'Embreagem Solar',
    category: '9HP48 (9 SP F/4WD)',
    transmission: '9HP48',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'estator',
    name: 'Estator',
    category: '9HP48 (9 SP F/4WD)',
    transmission: '9HP48',
    condition: 'Original',
    photos: 3
  },
  {
    id: 'mola-belleville',
    name: 'Mola Belleville',
    category: '9HP48 (9 SP F/4WD)',
    transmission: '9HP48',
    condition: 'Original',
    photos: 6
  },
  {
    id: 'pistao-embreagem',
    name: 'Pistão Embreagem',
    category: '9HP48 (9 SP F/4WD)',
    transmission: '9HP48',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'bomba-de-oleo-7',
    name: 'Bomba de Óleo',
    category: 'A4CF1/2 - I30 (2.0)',
    transmission: 'A4CF1/2 - I30',
    condition: 'Original',
    photos: 3
  },
  {
    id: 'bomba-oleo-7',
    name: 'Bomba Óleo',
    category: 'A4CF1/2 - I30 (2.0)',
    transmission: 'A4CF1',
    condition: 'Original',
    photos: 5,
    cover: 2
  },
  {
    id: 'conjunto-diferencial-2',
    name: 'Conjunto Diferencial',
    category: 'A4CF1/2 - I30 (2.0)',
    transmission: 'A4CF1',
    condition: 'Original',
    photos: 7,
    cover: 5
  },
  {
    id: 'conjunto-planetaria',
    name: 'Conjunto Planetária',
    category: 'A4CF1/2 - I30 (2.0)',
    transmission: 'A4CF1',
    condition: 'Original',
    photos: 5,
    cover: 2
  },
  {
    id: 'conjunto-planetario-7',
    name: 'Conjunto Planetário',
    category: 'A4CF1/2 - I30 (2.0)',
    transmission: 'A4CF1/2 - I30',
    condition: 'Original',
    photos: 8,
    cover: 2
  },
  {
    id: 'corpo-de-valvula-9',
    name: 'Corpo de Válvula',
    category: 'A4CF1/2 - I30 (2.0)',
    transmission: 'A4CF1/2 - I30',
    condition: 'Original',
    photos: 4
  },
  {
    id: 'corpo-valvula-7',
    name: 'Corpo Válvula',
    category: 'A4CF1/2 - I30 (2.0)',
    transmission: 'A4CF1 / A4CF2 (4 SP FWD)',
    condition: 'Original',
    photos: 5
  },
  {
    id: 'cuboembreagem-reduzida',
    name: 'Cubo Embreagem Reduzida',
    category: 'A4CF1/2 - I30 (2.0)',
    transmission: 'A4CF1/2 - I30',
    condition: 'Original',
    photos: 4
  },
  {
    id: 'cubo-sobremarcha',
    name: 'Cubo Sobremarcha',
    category: 'A4CF1/2 - I30 (2.0)',
    transmission: 'A4CF1',
    condition: 'Original',
    photos: 5,
    cover: 4
  },
  {
    id: 'cubo-sobremarcha-reduzida',
    name: 'Cubo Sobremarcha Reduzida',
    category: 'A4CF1/2 - I30 (2.0)',
    transmission: 'A4CF1',
    condition: 'Original',
    photos: 4
  },
  {
    id: 'cubo-submarcha',
    name: 'Cubo Submarcha',
    category: 'A4CF1/2 - I30 (2.0)',
    transmission: 'A4CF1/2 - I30 (2.0)',
    condition: 'Original',
    photos: 4,
    cover: 3
  },
  {
    id: 'discos-4',
    name: 'Discos',
    category: 'A4CF1/2 - I30 (2.0)',
    transmission: 'A4CF1/2 - I30',
    condition: 'Original',
    photos: 3
  },
  {
    id: 'embreagem-reduzida',
    name: 'Embreagem Reduzida',
    category: 'A4CF1/2 - I30 (2.0)',
    transmission: 'A4CF1/2 - I30',
    condition: 'Original',
    photos: 5
  },
  {
    id: 'embreagem-re-sobremarcha',
    name: 'Embreagem Ré Sobremarcha',
    category: 'A4CF1/2 - I30 (2.0)',
    transmission: 'A4CF1',
    condition: 'Original',
    photos: 5,
    cover: 3
  },
  {
    id: 'embreagem-re-sobremarcha-1',
    name: 'Embreagem Ré Submarcha',
    category: 'A4CF1/2 - I30 (2.0)',
    transmission: 'A4CF1/2 - I30',
    condition: 'Original',
    photos: 5,
    cover: 2
  },
  {
    id: 'embreagem-da-reduzida-c-eixo-admissao',
    name: 'Tambor Embreagem da Reduzida c/ Eixo Admissão',
    category: 'A4CF1/2 - I30 (2.0)',
    transmission: 'A4CF1',
    condition: 'Original',
    photos: 4,
    cover: 2
  },
  {
    id: 'tampa-traseira-4',
    name: 'Tampa Traseira',
    category: 'A4CF1/2 - I30 (2.0)',
    transmission: 'A4CF1',
    condition: 'Original',
    photos: 3
  },
  {
    id: 'tampa-traseira-10',
    name: 'Tampa Traseira',
    category: 'A4CF1/2 - I30 (2.0)',
    transmission: 'A4CF1/2 - I30',
    condition: 'Original',
    photos: 3
  },
  {
    id: 'bomba-de-oleo',
    name: 'Bomba de Óleo',
    category: 'A6GF1 / A6GF1-2',
    transmission: 'A6GF1-2',
    condition: 'Original',
    photos: 3
  },
  {
    id: 'bomba-oleo-a6gf1',
    name: 'Bomba Óleo - A6GF1',
    category: 'A6GF1 / A6GF1-2',
    transmission: 'A6GF1 (É BUCHA NÃO ROLETADA)',
    application: 'BOMBA OLEO - HB20',
    condition: 'Original',
    photos: 3
  },
  {
    id: 'chave-seletora-3',
    name: 'Chave Seletora',
    category: 'A6GF1 / A6GF1-2',
    transmission: 'A6GF1-2',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'chicote',
    name: 'Chicote',
    category: 'A6GF1 / A6GF1-2',
    transmission: 'A6GF1-2 CRETA 1.6',
    condition: 'Original',
    photos: 4
  },
  {
    id: 'chicote-corpo-de-valvula',
    name: 'Chicote Corpo de Válvula',
    category: 'A6GF1 / A6GF1-2',
    transmission: 'A6GF1-2',
    condition: 'Original',
    photos: 4
  },
  {
    id: 'conjunto-cubo-sub-acionamento',
    name: 'Conjunto Cubo Sub Acionamento',
    category: 'A6GF1 / A6GF1-2',
    transmission: 'A6GF1-2',
    condition: 'Original',
    photos: 4,
    cover: 2
  },
  {
    id: 'conjunto-de-disco-overdrive',
    name: 'Conjunto de Disco Overdrive',
    category: 'A6GF1 / A6GF1-2',
    transmission: 'A6GF1-2',
    condition: 'Original',
    photos: 5
  },
  {
    id: 'conjunto-diferencial-4',
    name: 'Conjunto Diferencial',
    category: 'A6GF1 / A6GF1-2',
    transmission: 'A6GF1-2',
    condition: 'Original',
    photos: 5
  },
  {
    id: 'conjunto-diferencial-traseiro',
    name: 'Conjunto Diferencial Traseiro',
    category: 'A6GF1 / A6GF1-2',
    transmission: 'A6GF1-2',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'conjunto-planetario-6',
    name: 'Conjunto Planetário',
    category: 'A6GF1 / A6GF1-2',
    transmission: 'A6GF1-2 CRETA 1.6',
    condition: 'Original',
    photos: 3,
    cover: 2
  },
  {
    id: 'conjunto-planetario-hb20',
    name: 'Conjunto Planetário - HB20',
    category: 'A6GF1 / A6GF1-2',
    transmission: 'A6GF1/ 2',
    condition: 'Original',
    photos: 4
  },
  {
    id: 'corpo-de-valvula',
    name: 'Corpo de Válvula',
    category: 'A6GF1 / A6GF1-2',
    transmission: 'A6GF1-2',
    condition: 'Original',
    photos: 6
  },
  {
    id: 'corpode-valvula',
    name: 'Corpo de Válvula',
    category: 'A6GF1 / A6GF1-2',
    transmission: 'A6GF1-2 CRETA 1.6',
    condition: 'Original',
    photos: 5
  },
  {
    id: 'guia-oleo',
    name: 'Guia Óleo',
    category: 'A6GF1 / A6GF1-2',
    transmission: 'A6GF1-2',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'pistao-2',
    name: 'Pistão',
    category: 'A6GF1 / A6GF1-2',
    transmission: 'A6GF1-2 CRETA 1.6',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'pistao-freio',
    name: 'Pistão Freio',
    category: 'A6GF1 / A6GF1-2',
    transmission: 'A6GF1-2',
    condition: 'Original',
    photos: 3
  },
  {
    id: 'suporte-central',
    name: 'Suporte Central',
    category: 'A6GF1 / A6GF1-2',
    transmission: 'A6GF1-2',
    condition: 'Original',
    photos: 5
  },
  {
    id: 'suporte-e-prato',
    name: 'Suporte e Prato',
    category: 'A6GF1 / A6GF1-2',
    transmission: 'A6GF1-2',
    condition: 'Original',
    photos: 6
  },
  {
    id: 'tambor-3-5-e-re',
    name: 'Tambor 3/5 e Ré',
    category: 'A6GF1 / A6GF1-2',
    transmission: 'A6GF1 - HB20 1.6',
    condition: 'Original',
    photos: 8
  },
  {
    id: 'tambor-overdrive-1',
    name: 'Tambor Overdrive',
    category: 'A6GF1 / A6GF1-2',
    transmission: 'A6GF1 - HB20 1.6',
    condition: 'Original',
    photos: 5,
    cover: 2
  },
  {
    id: 'tampa-traseira-3',
    name: 'Tampa Traseira',
    category: 'A6GF1 / A6GF1-2',
    transmission: 'A6GF1 - HB20 1.6',
    condition: 'Original',
    photos: 4
  },
  {
    id: 'bomba-de-oleo-4',
    name: 'Bomba de Óleo',
    category: 'A6MF1 - IX35',
    transmission: 'A6MF1 - IX35',
    condition: 'Original',
    photos: 3
  },
  {
    id: 'chicote-2',
    name: 'Chicote',
    category: 'A6MF1 - IX35',
    transmission: 'A6MF1 - IX35',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'conjunto-cubo-freio',
    name: 'Conjunto Cubo Freio',
    category: 'A6MF1 - IX35',
    transmission: 'A6MF1 - IX35',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'conjunto-diferencial-8',
    name: 'Conjunto Diferencial',
    category: 'A6MF1 - IX35',
    transmission: 'A6MF1 - IX35',
    condition: 'Original',
    photos: 5
  },
  {
    id: 'conjunto-do-cubo-embreagem-3-5-re',
    name: 'Conjunto do Cubo Embreagem 3/5 Ré',
    category: 'A6MF1 - IX35',
    transmission: 'A6MF1 - IX35',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'conjunto-engrenagem-tranferencial',
    name: 'Conjunto Engrenagem Transferencial',
    category: 'A6MF1 - IX35',
    transmission: 'A6MF1 - IX35',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'corpo-de-valvula-7',
    name: 'Corpo de Válvula',
    category: 'A6MF1 - IX35',
    transmission: 'A6MF1 - IX35',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'embreagem-3-5-e-re',
    name: 'Embreagem 3/5 e Ré',
    category: 'A6MF1 - IX35',
    transmission: 'A6MF1 - IX35',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'embreagem-overdrive',
    name: 'Embreagem Overdrive',
    category: 'A6MF1 - IX35',
    transmission: 'A6MF1 - IX35',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'guia-de-oleo',
    name: 'Guia de Óleo',
    category: 'A6MF1 - IX35',
    transmission: 'A6MF1 - IX35',
    condition: 'Original',
    photos: 2,
    cover: 2
  },
  {
    id: 'pistao-mola',
    name: 'Pistão Mola',
    category: 'A6MF1 - IX35',
    transmission: 'A6MF1 - IX35',
    condition: 'Original',
    photos: 4
  },
  {
    id: 'planetaria-traseira-1',
    name: 'Planetária Traseira',
    category: 'A6MF1 - IX35',
    transmission: 'A6MF1 - IX35',
    condition: 'Original',
    photos: 3
  },
  {
    id: 'seletora',
    name: 'Seletora',
    category: 'A6MF1 - IX35',
    transmission: 'A6MF1 - IX35',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'suporte-central-pistao',
    name: 'Suporte Central Pistão',
    category: 'A6MF1 - IX35',
    transmission: 'A6MF1 - IX35',
    condition: 'Original',
    photos: 4
  },
  {
    id: 'tampa-traseira-7',
    name: 'Tampa Traseira',
    category: 'A6MF1 - IX35',
    transmission: 'A6MF1 - IX35',
    condition: 'Original',
    photos: 3
  },
  {
    id: 'bomba-de-oleo-6',
    name: 'Bomba de Óleo',
    category: 'AL4 (4 SP FWD)',
    transmission: 'AL4',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'capa-shel',
    name: 'Capa Shell',
    category: 'AL4 (4 SP FWD)',
    transmission: 'AL4',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'cilindro-da-embreagem',
    name: 'Cilindro da Embreagem',
    category: 'AL4 (4 SP FWD)',
    transmission: 'AL4',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'carte-2',
    name: 'Cárter',
    category: 'AL4 (4 SP FWD)',
    transmission: 'AL4',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'discos-3',
    name: 'Discos',
    category: 'AL4 (4 SP FWD)',
    transmission: 'AL4',
    condition: 'Original',
    photos: 3
  },
  {
    id: 'eixo-de-entreda',
    name: 'Eixo de Entrada',
    category: 'AL4 (4 SP FWD)',
    transmission: 'AL4',
    condition: 'Original',
    photos: 2,
    cover: 2
  },
  {
    id: 'mola-retorno',
    name: 'Mola Retorno',
    category: 'AL4 (4 SP FWD)',
    transmission: 'AL4',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'tampa-traseira-9',
    name: 'Tampa Traseira',
    category: 'AL4 (4 SP FWD)',
    transmission: 'AL4',
    condition: 'Original',
    photos: 3
  },
  {
    id: 'bomba-oleo-1',
    name: 'Bomba Óleo',
    category: 'AW5040LE (4 SP FWD)',
    transmission: 'AW5040',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'corpo-valvula-8',
    name: 'Corpo Válvula',
    category: 'AW5040LE (4 SP FWD)',
    transmission: 'AW5040LE (4 SP FWD)',
    condition: 'Original',
    photos: 3
  },
  {
    id: 'bomba-oleo',
    name: 'Bomba Óleo',
    category: 'AW5550SN / AW5551SN (5 SP FWD)',
    transmission: 'AW55-51',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'chave-seletora-2',
    name: 'Chave Seletora',
    category: 'AW5550SN / AW5551SN (5 SP FWD)',
    transmission: 'AW5551 (VOLVO)',
    condition: 'Original',
    photos: 3,
    cover: 2
  },
  {
    id: 'eixo',
    name: 'Eixo',
    category: 'AW5550SN / AW5551SN (5 SP FWD)',
    transmission: 'AW55-51',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'tambor',
    name: 'Tambor',
    category: 'AW5550SN / AW5551SN (5 SP FWD)',
    transmission: 'AW55-51',
    condition: 'Original',
    photos: 3
  },
  {
    id: 'tampa-traseira-1',
    name: 'Tampa Traseira',
    category: 'AW5550SN / AW5551SN (5 SP FWD)',
    transmission: 'AW55-51 (VOLVO)',
    condition: 'Original',
    photos: 3,
    cover: 2
  },
  {
    id: 'catraca',
    name: 'Catraca',
    category: 'CAMBIO 6T30',
    transmission: '6T30 (6 SP FWD)',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'catraca-1',
    name: 'Catraca',
    category: 'CAMBIO 6T30',
    transmission: '6T30',
    condition: 'Original',
    photos: 4,
    cover: 2
  },
  {
    id: 'compartimento-embreagem-baixa-re-1-2-3-4',
    name: 'Compartimento Embreagem Baixa Ré/1/2/3/4',
    category: 'CAMBIO 6T30',
    transmission: '6T30/31',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'conjunto-carcaca-6t30',
    name: 'Conjunto Carcaça - 6T30',
    category: 'CAMBIO 6T30',
    transmission: 'CAMBIO 6T30',
    application: 'CONJUNTO CARCAÇA - 6T30 (USADA) PRIMEIRA GERAÇÃO',
    condition: 'Original',
    photos: 5
  },
  {
    id: 'conjunto-embreagem-re-3-e-5',
    name: 'Conjunto Embreagem Ré 3º e 5º',
    category: 'CAMBIO 6T30',
    transmission: '6T30',
    condition: 'Original',
    photos: 5,
    cover: 3
  },
  {
    id: 'conjunto-planetario-3',
    name: 'Conjunto Planetário',
    category: 'CAMBIO 6T30',
    transmission: '6T30',
    condition: 'Original',
    photos: 5,
    cover: 4
  },
  {
    id: 'bocal-de-lubrificacao-do-acionamento',
    name: 'Bocal de Lubrificação do Acionamento',
    category: 'CAMBIO 6T31',
    transmission: '6T30/31',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'bomba-oleo-6t31',
    name: 'Bomba Óleo 6T31',
    category: 'CAMBIO 6T31',
    transmission: 'CAMBIO 6T31',
    application: 'BOMBA OLEO 6T31 - CHEVROLET',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'capa-shel-2',
    name: 'Capa Shell 2',
    category: 'CAMBIO 6T31',
    transmission: '6T30/31',
    condition: 'Original',
    photos: 4
  },
  {
    id: 'catraca-3',
    name: 'Catraca',
    category: 'CAMBIO 6T31',
    transmission: '6T30/31',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'conjunto-da-articulacao-de-acionamento',
    name: 'Conjunto da Articulação de Acionamento',
    category: 'CAMBIO 6T31',
    transmission: '6T30/31',
    condition: 'Original',
    photos: 3
  },
  {
    id: 'conjunto-da-valvula-do-solenoide-descontrole-corpo-e-tcm',
    name: 'Conjunto da Válvula do Solenoide de Controle (Corpo e TCM)',
    category: 'CAMBIO 6T31',
    transmission: '6T30/31',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'conjunto-de-embreagem-de-entrada-saida-reacao',
    name: 'Conjunto de Embreagem de Entrada,Saída,Reação',
    category: 'CAMBIO 6T31',
    transmission: '6T30/31',
    condition: 'Original',
    photos: 4
  },
  {
    id: 'conjunto-de-embreagem-de-marcha-re-3-5',
    name: 'Conjunto de Embreagem de Marcha Ré 3/5',
    category: 'CAMBIO 6T31',
    transmission: 'CAMBIO 6T31',
    condition: 'Original',
    photos: 7,
    cover: 2
  },
  {
    id: 'corpo-de-valvula-1',
    name: 'Corpo de Válvula',
    category: 'CAMBIO 6T31',
    transmission: '6T30/31',
    condition: 'Original',
    photos: 6
  },
  {
    id: 'defletor-do-suporte-do-diferencial-dianteiro',
    name: 'Defletor do Suporte do Diferencial Dianteiro',
    category: 'CAMBIO 6T31',
    transmission: '6T30/31',
    condition: 'Original',
    photos: 4
  },
  {
    id: 'diferencial',
    name: 'Diferencial',
    category: 'CAMBIO 6T31',
    transmission: '6T30/31',
    condition: 'Original',
    photos: 3
  },
  {
    id: 'discos',
    name: 'Discos',
    category: 'CAMBIO 6T31',
    transmission: '6T30/31',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'embreagem-de-estacionamento',
    name: 'Embreagem de Estacionamento',
    category: 'CAMBIO 6T31',
    transmission: '6T30/31',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'embreagem-do-aneldo-diferencial-dianteiro',
    name: 'Embreagem do Anel do Diferencial Dianteiro',
    category: 'CAMBIO 6T31',
    transmission: '6T30/31',
    condition: 'Original',
    photos: 1
  },
  {
    id: 'embreagem-planetaria-acionamento-final',
    name: 'Embreagem Planetária Acionamento Final',
    category: 'CAMBIO 6T31',
    transmission: '6T30/31',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'montagem-emgrenagem-central-de-reacao',
    name: 'Montagem Engrenagem Central de Reação',
    category: 'CAMBIO 6T31',
    transmission: '6T30/31',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'modulo-6937',
    name: 'Módulo 6937',
    category: 'CAMBIO 6T31',
    transmission: '6T30/31',
    condition: 'Original',
    photos: 5
  },
  {
    id: 'pistao',
    name: 'Pistão',
    category: 'CAMBIO 6T31',
    transmission: '6T30/31',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'roda-dentada-acionada',
    name: 'Roda Dentada Acionada',
    category: 'CAMBIO 6T31',
    transmission: '6T30/31',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'sensor-azul',
    name: 'Sensor Azul',
    category: 'CAMBIO 6T31',
    transmission: '6T30/31',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'sensor-de-entrada-gm',
    name: 'Sensor de Entrada - GM',
    category: 'CAMBIO 6T31',
    transmission: '6T30/31',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'suporte-de-eixo-de-entrada',
    name: 'Suporte de Eixo de Entrada',
    category: 'CAMBIO 6T31',
    transmission: 'CAMBIO 6T31',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'valvula-de-controle-de-nivel-do-fluido-atraz',
    name: 'Válvula de Controle de Nível do Fluido Atrás',
    category: 'CAMBIO 6T31',
    transmission: '6T30/31',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'anel-planetario',
    name: 'Anel Planetário',
    category: 'COROLLA - A240 / A245E',
    transmission: 'A245',
    condition: 'Original',
    photos: 4
  },
  {
    id: 'bomba-oleo-a245',
    name: 'Bomba Óleo - A245',
    category: 'COROLLA - A240 / A245E',
    transmission: 'A245 (ROLETADA)',
    condition: 'Original',
    photos: 7
  },
  {
    id: 'cinta',
    name: 'Cinta',
    category: 'COROLLA - A240 / A245E',
    transmission: 'A245',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'conjunto-embreagem-1-vias-do-underdriver',
    name: 'Conjunto Embreagem 1 Vias do Underdrive',
    category: 'COROLLA - A240 / A245E',
    transmission: 'A245',
    condition: 'Original',
    photos: 5
  },
  {
    id: 'conjunto-embreagem-de-1-vias',
    name: 'Conjunto Embreagem de 1 Vias',
    category: 'COROLLA - A240 / A245E',
    transmission: 'A245',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'conjnto-embreagem-planetaria-dianteira',
    name: 'Conjunto Embreagem Planetária Dianteira',
    category: 'COROLLA - A240 / A245E',
    transmission: 'A245',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'corpo-de-valvula-4',
    name: 'Corpo de Válvula',
    category: 'COROLLA - A240 / A245E',
    transmission: 'A245',
    condition: 'Original',
    photos: 5
  },
  {
    id: 'diferencial-1',
    name: 'Diferencial',
    category: 'COROLLA - A240 / A245E',
    transmission: 'A245',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'eixo-1',
    name: 'Eixo',
    category: 'COROLLA - A240 / A245E',
    transmission: 'A245',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'embreagem-dianteira',
    name: 'Embreagem Dianteira',
    category: 'COROLLA - A240 / A245E',
    transmission: 'A245',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'embreagem-marcha-frente',
    name: 'Embreagem Marcha Frente',
    category: 'COROLLA - A240 / A245E',
    transmission: 'A245',
    condition: 'Original',
    photos: 7
  },
  {
    id: 'sub-conjunto-planetaria',
    name: 'Sub Conjunto Planetária',
    category: 'COROLLA - A240 / A245E',
    transmission: 'A245',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'sub-conjunto-sol-planetario-underdrive',
    name: 'Sub Conjunto Sol Planetário Underdrive',
    category: 'COROLLA - A240 / A245E',
    transmission: 'COROLLA - A240 / A245E',
    condition: 'Original',
    photos: 4
  },
  {
    id: 'anel-entrada',
    name: 'Anel Entrada',
    category: 'COROLLA - K112',
    transmission: 'K112',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'bomba-de-oleo-8',
    name: 'Bomba de Óleo',
    category: 'COROLLA - K112',
    transmission: 'K112',
    condition: 'Original',
    photos: 3
  },
  {
    id: 'carregador-planetario',
    name: 'Carregador Planetário',
    category: 'COROLLA - K112',
    transmission: 'K112',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'conjunto-cvt-k112',
    name: 'Conjunto CVT - K112',
    category: 'COROLLA - K112',
    transmission: 'K112',
    application: 'COROLLA (2015 - 2019) 2.0',
    photos: 4
  },
  {
    id: 'conjunto-mola',
    name: 'Conjunto Mola',
    category: 'COROLLA - K112',
    transmission: 'K112',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'conjunto-polia',
    name: 'Conjunto Polia',
    category: 'COROLLA - K112',
    transmission: 'K112',
    condition: 'Original',
    photos: 3,
    cover: 2
  },
  {
    id: 'corpo-valvula-k112',
    name: 'Corpo Válvula - K112',
    category: 'COROLLA - K112',
    transmission: 'K112',
    condition: 'Original',
    photos: 4
  },
  {
    id: 'discos-5',
    name: 'Discos',
    category: 'COROLLA - K112',
    transmission: 'K112',
    condition: 'Original',
    photos: 3
  },
  {
    id: 'eixo-de-entrada-3',
    name: 'Eixo de Entrada',
    category: 'COROLLA - K112',
    transmission: 'K112',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'engrenagem-solar-2',
    name: 'Engrenagem Solar',
    category: 'COROLLA - K112',
    transmission: 'K112',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'interna-k112',
    name: 'Interna K112',
    category: 'COROLLA - K112',
    transmission: 'COROLLA - K112',
    application: 'INTERNA K112 - TOYOTA COROLLA 2.0 (2015 - 2019)ACOMPANHA:CONJUNTO DISCO COMPOSITE E AÇO BOMBA DE OLEOCONJUNTO CVTCORPO DE VALVULA',
    condition: 'Original',
    photos: 7
  },
  {
    id: 'conjunto-cvt-k313',
    name: 'Conjunto CVT - K313',
    category: 'COROLLA - K313',
    transmission: 'K313/K311',
    application: 'TOYOTA COROLLA (2015 - 2019) 1.8',
    photos: 5
  },
  {
    id: 'conjunto-planetario-k313',
    name: 'Conjunto Planetário - K313',
    category: 'COROLLA - K313',
    transmission: 'K313',
    condition: 'Original',
    photos: 4
  },
  {
    id: 'bomba-de-oleo-2',
    name: 'Bomba de Óleo',
    category: 'COROLLA - U240E / U241E',
    transmission: 'U240',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'conjunto-planetario-sub-marcha',
    name: 'Conjunto Planetário Sub Marcha',
    category: 'COROLLA - U240E / U241E',
    transmission: 'U240',
    condition: 'Original',
    photos: 3
  },
  {
    id: 'corpo-valuvla-u240',
    name: 'Corpo Válvula U240',
    category: 'COROLLA - U240E / U241E',
    transmission: 'U240 TOYOTA COROLLA 2.0 - 2009 até 2014',
    condition: 'Original',
    photos: 4
  },
  {
    id: 'cuboembreagem-frente',
    name: 'Cubo Embreagem Frente',
    category: 'COROLLA - U240E / U241E',
    transmission: 'U240',
    condition: 'Original',
    photos: 1
  },
  {
    id: 'diferencial-2',
    name: 'Diferencial',
    category: 'COROLLA - U240E / U241E',
    transmission: 'U240',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'engrenagem-intermediaria-motriz',
    name: 'Engrenagem Intermediária Motriz',
    category: 'COROLLA - U240E / U241E',
    transmission: 'U240',
    condition: 'Original',
    photos: 1
  },
  {
    id: 'engrenagem-marcha-frente',
    name: 'Engrenagem Marcha Frente',
    category: 'COROLLA - U240E / U241E',
    transmission: 'U240',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'engrenagem-solar',
    name: 'Engrenagem Solar',
    category: 'COROLLA - U240E / U241E',
    transmission: 'U240',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'engrenagem-sub-marcha',
    name: 'Engrenagem Sub Marcha',
    category: 'COROLLA - U240E / U241E',
    transmission: 'U240',
    condition: 'Original',
    photos: 3
  },
  {
    id: 'luva-externa',
    name: 'Luva Externa',
    category: 'COROLLA - U240E / U241E',
    transmission: 'U240',
    condition: 'Original',
    photos: 1
  },
  {
    id: 'roda-livre-sub-marcha',
    name: 'Roda Livre Sub Marcha',
    category: 'COROLLA - U240E / U241E',
    transmission: 'U240',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'roda-livre-traseira',
    name: 'Roda Livre Traseira',
    category: 'COROLLA - U240E / U241E',
    transmission: 'U240',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'tampa-traseira-5',
    name: 'Tampa Traseira',
    category: 'COROLLA - U240E / U241E',
    transmission: 'U240',
    condition: 'Original',
    photos: 3
  },
  {
    id: 'bomba-de-oleo-5',
    name: 'Bomba de Óleo',
    category: 'COROLLA - U341',
    transmission: 'U341',
    condition: 'Original',
    photos: 3
  },
  {
    id: 'bomba-oleo-10',
    name: 'Bomba Óleo',
    category: 'COROLLA - U341',
    transmission: 'U341',
    condition: 'Original',
    photos: 3
  },
  {
    id: 'conjunto-disco',
    name: 'Conjunto Disco',
    category: 'COROLLA - U341',
    transmission: 'U341',
    photos: 3
  },
  {
    id: 'conjunto-planetario-4',
    name: 'Conjunto Planetário',
    category: 'COROLLA - U341',
    transmission: 'U341',
    condition: 'Original',
    photos: 3
  },
  {
    id: 'corpo-de-valvula-8',
    name: 'Corpo de Válvula',
    category: 'COROLLA - U341',
    transmission: 'U341',
    condition: 'Original',
    photos: 3,
    cover: 2
  },
  {
    id: 'corpo-valvula-c-chicote',
    name: 'Corpo Válvula c/ Chicote',
    category: 'COROLLA - U341',
    transmission: 'U341 CORPO DE VALVULA ATUALIZADO COM SOLENOIDES GRANDES',
    condition: 'Original',
    photos: 3
  },
  {
    id: 'discos-2',
    name: 'Discos',
    category: 'COROLLA - U341',
    transmission: 'U341',
    condition: 'Original',
    photos: 3
  },
  {
    id: 'eixo-entrada',
    name: 'Eixo Entrada',
    category: 'COROLLA - U341',
    transmission: 'U341',
    condition: 'Original',
    photos: 3
  },
  {
    id: 'planetaria-4',
    name: 'Planetária',
    category: 'COROLLA - U341',
    transmission: 'U341',
    condition: 'Original',
    photos: 3
  },
  {
    id: 'tambor-direta',
    name: 'Tambor Direta',
    category: 'COROLLA - U341',
    transmission: 'U341',
    condition: 'Original',
    photos: 4
  },
  {
    id: 'tambor-direta-1',
    name: 'Tambor Direta',
    category: 'COROLLA - U341',
    transmission: 'U341',
    condition: 'Original',
    photos: 4,
    cover: 2
  },
  {
    id: 'tambor-tampa',
    name: 'Tambor Tampa',
    category: 'COROLLA - U341',
    transmission: 'U341',
    condition: 'Original',
    photos: 3
  },
  {
    id: 'tampa-traseira-2',
    name: 'Tampa Traseira',
    category: 'COROLLA - U341',
    transmission: 'U341',
    condition: 'Original',
    photos: 3
  },
  {
    id: 'tampa-traseira-8',
    name: 'Tampa Traseira',
    category: 'COROLLA - U341',
    transmission: 'U341',
    condition: 'Original',
    photos: 3
  },
  {
    id: 'bomba-oleo-3',
    name: 'Bomba Óleo',
    category: 'COROLLA K120',
    transmission: 'K120',
    condition: 'Original',
    photos: 4
  },
  {
    id: 'conjunto-cvt',
    name: 'Conjunto CVT',
    category: 'COROLLA K120',
    transmission: 'K120',
    condition: 'Original',
    photos: 9
  },
  {
    id: 'corpo-de-valvula-6',
    name: 'Corpo de Válvula',
    category: 'COROLLA K120',
    transmission: 'K120',
    condition: 'Original',
    photos: 3
  },
  {
    id: 'diferencial-3',
    name: 'Diferencial',
    category: 'COROLLA K120',
    transmission: 'K120',
    condition: 'Original',
    photos: 3,
    cover: 2
  },
  {
    id: 'estator-bomba-oleo',
    name: 'Estator Bomba Óleo',
    category: 'COROLLA K120',
    transmission: 'K120',
    condition: 'Original',
    photos: 4
  },
  {
    id: 'tambor-completo',
    name: 'Tambor Completo',
    category: 'COROLLA K120',
    transmission: 'K120',
    condition: 'Original',
    photos: 4
  },
  {
    id: 'bomba-oleo-6f15',
    name: 'Bomba Óleo - 6F15',
    category: 'FORD - 6F15 (KA/ECOSPORT)',
    transmission: '6F15 1.0L 1.5L L4 2.0L',
    application: 'FORD KA/ECOSPORT (2018 - 2022)',
    photos: 2
  },
  {
    id: 'chave-seletora-6f15',
    name: 'Chave Seletora - 6F15',
    category: 'FORD - 6F15 (KA/ECOSPORT)',
    transmission: '6F15 (FORD)PRODUTO NOVO',
    condition: 'Original',
    photos: 3
  },
  {
    id: 'corpo-valvula-6f15',
    name: 'Corpo Válvula - 6F15',
    category: 'FORD - 6F15 (KA/ECOSPORT)',
    transmission: '6F15 (CORPO VALVULA NOVO)',
    condition: 'Original',
    photos: 6
  },
  {
    id: 'conjunto-cvt-1',
    name: 'Conjunto CVT',
    category: 'FORD TERRITORY',
    transmission: 'VT5 (CVT)CONJUNTO CVT + CORRENTE + TAMPA TRASEIRA',
    condition: 'Original',
    photos: 4
  },
  {
    id: 'corpo-valvula-3',
    name: 'Corpo Válvula',
    category: 'FORD TERRITORY',
    transmission: 'VT5 (CVT)',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'bomba-oleo-5',
    name: 'Bomba Óleo',
    category: 'HONDA (CITY, FIT, WRV) MODERNO',
    transmission: 'HONDA 1.5',
    condition: 'Original',
    photos: 5
  },
  {
    id: 'chicote-1',
    name: 'Chicote',
    category: 'HONDA (CITY, FIT, WRV) MODERNO',
    transmission: 'HONDA CIVIC 2.0 CVT',
    condition: 'Original',
    photos: 1
  },
  {
    id: 'conjunto-cvt-2',
    name: 'Conjunto CVT',
    category: 'HONDA (CITY, FIT, WRV) MODERNO',
    transmission: 'HONDA CVT 1.5',
    condition: 'Original',
    photos: 7
  },
  {
    id: 'conjunto-planetario-1',
    name: 'Conjunto Diferencial',
    category: 'HONDA (CITY, FIT, WRV) MODERNO',
    transmission: 'HONDA CVT 1.5',
    condition: 'Original',
    photos: 6
  },
  {
    id: 'conjunto-diferencial-67x38x32',
    name: 'Conjunto Diferencial (67X38X32)',
    category: 'HONDA (CITY, FIT, WRV) MODERNO',
    transmission: 'HONDA CIVIC 2.0 CVT',
    condition: 'Original',
    photos: 6
  },
  {
    id: 'conjunto-planetario-2',
    name: 'Conjunto Planetário',
    category: 'HONDA (CITY, FIT, WRV) MODERNO',
    transmission: 'HONDA CVT 1.5',
    condition: 'Original',
    photos: 6
  },
  {
    id: 'corpo-valvula-4',
    name: 'Corpo Válvula',
    category: 'HONDA (CITY, FIT, WRV) MODERNO',
    transmission: 'HONDA 1.5 CVT',
    condition: 'Original',
    photos: 4
  },
  {
    id: 'corrente-cvt-honda-1-5',
    name: 'Corrente CVT - Honda 1.5',
    category: 'HONDA (CITY, FIT, WRV) MODERNO',
    transmission: 'HONDA CVT 1.5',
    condition: 'Original',
    photos: 4
  },
  {
    id: 'carte',
    name: 'Cárter',
    category: 'HONDA (CITY, FIT, WRV) MODERNO',
    transmission: 'HONDA CIVIC 2.0 CVT',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'estator-da-bomba',
    name: 'Estator da Bomba',
    category: 'HONDA (CITY, FIT, WRV) MODERNO',
    transmission: 'HONDA CVT 1.5',
    condition: 'Original',
    photos: 5
  },
  {
    id: 'tambor-traseiro-1',
    name: 'Tambor Traseiro',
    category: 'HONDA (CITY, FIT, WRV) MODERNO',
    transmission: 'HONDA CVT 1.5',
    photos: 4
  },
  {
    id: 'bomba-de-oleo-10',
    name: 'Bomba de Óleo',
    category: 'HONDA CIVIC (2.0 CVT)',
    transmission: 'HONDA 2.0 CVT',
    condition: 'Original',
    photos: 1
  },
  {
    id: 'chicote-4',
    name: 'Chicote',
    category: 'HONDA CIVIC (2.0 CVT)',
    transmission: 'HONDA 2.0 CVT',
    condition: 'Original',
    photos: 1
  },
  {
    id: 'conjunto-diferencial-67x38x32-1',
    name: 'Conjunto Diferencial (67X38X32)',
    category: 'HONDA CIVIC (2.0 CVT)',
    transmission: 'HONDA 2.0 CVT',
    condition: 'Original',
    photos: 6
  },
  {
    id: 'conjunto-pulia',
    name: 'Conjunto Pulia',
    category: 'HONDA CIVIC (2.0 CVT)',
    transmission: 'HONDA 2.0 CVT',
    condition: 'Original',
    photos: 5
  },
  {
    id: 'corpo-de-valvula-10',
    name: 'Corpo de Válvula',
    category: 'HONDA CIVIC (2.0 CVT)',
    transmission: 'HONDA 2.0 CVT',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'corrente-1',
    name: 'Corrente',
    category: 'HONDA CIVIC (2.0 CVT)',
    transmission: 'HONDA 2.0 CVT',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'carte-3',
    name: 'Cárter',
    category: 'HONDA CIVIC (2.0 CVT)',
    transmission: 'HONDA 2.0 CVT',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'defletor',
    name: 'Defletor',
    category: 'HONDA CIVIC (2.0 CVT)',
    transmission: 'HONDA 2.0 CVT',
    condition: 'Original',
    photos: 4
  },
  {
    id: 'estator-1',
    name: 'Estator',
    category: 'HONDA CIVIC (2.0 CVT)',
    transmission: 'HONDA 2.0 CVT',
    condition: 'Original',
    photos: 4
  },
  {
    id: 'planetaria-5',
    name: 'Planetária',
    category: 'HONDA CIVIC (2.0 CVT)',
    transmission: 'HONDA 2.0 CVT',
    condition: 'Original',
    photos: 3
  },
  {
    id: 'prato-mola',
    name: 'Prato Mola',
    category: 'HONDA CIVIC (2.0 CVT)',
    transmission: 'HONDA 2.0 CVT',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'protetor-de-oleo',
    name: 'Protetor de Óleo',
    category: 'HONDA CIVIC (2.0 CVT)',
    transmission: 'HONDA CIVIC (2.0 CVT)',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'tambor-de-entrada',
    name: 'Tambor de Entrada',
    category: 'HONDA CIVIC (2.0 CVT)',
    transmission: 'HONDA 2.0 CVT',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'bomba-de-oleo-12',
    name: 'Bomba de Óleo',
    category: 'HR-V (CVT)',
    transmission: 'HRV',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'bomba-oleo-6',
    name: 'Bomba Óleo',
    category: 'HR-V (CVT)',
    transmission: 'HRV 1.8',
    condition: 'Original',
    photos: 5,
    cover: 2
  },
  {
    id: 'chicote-5',
    name: 'Chicote',
    category: 'HR-V (CVT)',
    transmission: 'HRV',
    condition: 'Original',
    photos: 1
  },
  {
    id: 'corpo-de-valvula-12',
    name: 'Corpo de Válvula',
    category: 'HR-V (CVT)',
    transmission: 'HRV',
    condition: 'Original',
    photos: 3
  },
  {
    id: 'corpo-valvula',
    name: 'Corpo Válvula',
    category: 'HR-V (CVT)',
    transmission: 'G2AA / G2CA / G2MA / G5CA / GDMA / GX2A / GPAA / M3WC ... (CVT FWD)(HR-V)',
    condition: 'Original',
    photos: 4
  },
  {
    id: 'corpo-valvula-9',
    name: 'Corpo Válvula',
    category: 'HR-V (CVT)',
    transmission: 'HR-V 1.8',
    condition: 'Original',
    photos: 4,
    cover: 2
  },
  {
    id: 'carter',
    name: 'Cárter',
    category: 'HR-V (CVT)',
    transmission: 'HR-V 1.8',
    condition: 'Original',
    photos: 3,
    cover: 2
  },
  {
    id: 'carte-4',
    name: 'Cárter',
    category: 'HR-V (CVT)',
    transmission: 'HRV',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'defletor-2',
    name: 'Defletor',
    category: 'HR-V (CVT)',
    transmission: 'HRV',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'disco-composite-e-aco',
    name: 'Disco Composite e Aço',
    category: 'HR-V (CVT)',
    transmission: 'HR-V 1.8',
    condition: 'Original',
    photos: 2,
    cover: 2
  },
  {
    id: 'discos-7',
    name: 'Discos',
    category: 'HR-V (CVT)',
    transmission: 'HRV',
    condition: 'Original',
    photos: 3
  },
  {
    id: 'eixo-de-entrada',
    name: 'Eixo de Entrada',
    category: 'HR-V (CVT)',
    transmission: 'HR-V 1.8',
    condition: 'Original',
    photos: 5,
    cover: 2
  },
  {
    id: 'estator-2',
    name: 'Estator',
    category: 'HR-V (CVT)',
    transmission: 'HRV',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'estator-da-bomba-1',
    name: 'Estator da Bomba',
    category: 'HR-V (CVT)',
    transmission: 'HR-V 1.8',
    condition: 'Original',
    photos: 3,
    cover: 2
  },
  {
    id: 'par-defletor',
    name: 'Par Defletor',
    category: 'HR-V (CVT)',
    transmission: 'HR-V 1.8',
    condition: 'Original',
    photos: 3,
    cover: 2
  },
  {
    id: 'planetaria-6',
    name: 'Planetária',
    category: 'HR-V (CVT)',
    transmission: 'HRV',
    condition: 'Original',
    photos: 4
  },
  {
    id: 'prato-mola-1',
    name: 'Prato Mola',
    category: 'HR-V (CVT)',
    transmission: 'HRV',
    condition: 'Original',
    photos: 3
  },
  {
    id: 'tambor-entrada',
    name: 'Tambor Entrada',
    category: 'HR-V (CVT)',
    transmission: 'HRV',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'tampa-traseira',
    name: 'Tampa Traseira',
    category: 'HR-V (CVT)',
    transmission: 'HR-V 1.8',
    condition: 'Original',
    photos: 4,
    cover: 2
  },
  {
    id: 'bomba-de-oleo-3',
    name: 'Bomba de Óleo',
    category: 'JF-015 (RENAULT)',
    transmission: 'JF015 (NISSAN)',
    condition: 'Original',
    photos: 3
  },
  {
    id: 'bomba-star-stop',
    name: 'Bomba Star Stop',
    category: 'JF-015 (RENAULT)',
    transmission: 'JF015 (NISSAN)',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'chave-seletora-4',
    name: 'Chave Seletora',
    category: 'JF-015 (RENAULT)',
    transmission: 'JF015 (NISSAN)',
    condition: 'Original',
    photos: 3,
    cover: 2
  },
  {
    id: 'conjunto-cvt-corrente',
    name: 'Conjunto CVT + Corrente',
    category: 'JF-015 (RENAULT)',
    transmission: 'JF015/020DUSTES (2022 - 2024) 1.6',
    condition: 'Original',
    photos: 11
  },
  {
    id: 'conjunto-cvt-com-corrente',
    name: 'Conjunto CVT com Corrente',
    category: 'JF-015 (RENAULT)',
    transmission: 'JF015 (NISSAN)',
    condition: 'Original',
    photos: 4
  },
  {
    id: 'conjunto-disco-1',
    name: 'Conjunto Disco',
    category: 'JF-015 (RENAULT)',
    transmission: 'JF015 (NISSAN)',
    condition: 'Original',
    photos: 5
  },
  {
    id: 'conjunto-planetario',
    name: 'Conjunto Planetário',
    category: 'JF-015 (RENAULT)',
    transmission: 'JF015/020NISSAN e RENAULT (esse conjunto é aplicado em ambas transmissão)',
    condition: 'Original',
    photos: 1
  },
  {
    id: 'corpo-de-valvula-5',
    name: 'Corpo de Válvula',
    category: 'JF-015 (RENAULT)',
    transmission: 'JF015 (NISSAN)',
    condition: 'Original',
    photos: 3
  },
  {
    id: 'corpo-valvula-2',
    name: 'Corpo Válvula',
    category: 'JF-015 (RENAULT)',
    transmission: 'JF-015 LINHA RENAULT',
    condition: 'Original',
    photos: 3
  },
  {
    id: 'corrente',
    name: 'Corrente',
    category: 'JF-015 (RENAULT)',
    transmission: 'JF015 (NISSAN)',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'eixo-de-entrada-2',
    name: 'Eixo de Entrada',
    category: 'JF-015 (RENAULT)',
    transmission: 'JF015 (NISSAN)',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'planetaria-3',
    name: 'Planetária',
    category: 'JF-015 (RENAULT)',
    transmission: 'JF015 (NISSAN)',
    condition: 'Original',
    photos: 6
  },
  {
    id: 'sensores',
    name: 'Sensores',
    category: 'JF-015 (RENAULT)',
    transmission: 'JF015 (NISSAN)',
    condition: 'Original',
    photos: 1
  },
  {
    id: 'tambor-embreagem-alta',
    name: 'Tambor Embreagem Alta',
    category: 'JF-015 (RENAULT)',
    transmission: 'JF015 (NISSAN)',
    condition: 'Original',
    photos: 3
  },
  {
    id: 'tampa-central',
    name: 'Tampa Central',
    category: 'JF-015 (RENAULT)',
    transmission: 'JF015 (NISSAN)',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'tampa-traseira-6',
    name: 'Tampa Traseira',
    category: 'JF-015 (RENAULT)',
    transmission: 'JF015 (NISSAN)',
    condition: 'Original',
    photos: 4
  },
  {
    id: 'bomba-de-oleo-1',
    name: 'Bomba de Óleo',
    category: 'JF011',
    transmission: 'JF011',
    condition: 'Original',
    photos: 4
  },
  {
    id: 'conjunto-cvt-3',
    name: 'Conjunto CVT',
    category: 'JF011',
    transmission: 'JF011',
    condition: 'Original',
    photos: 3
  },
  {
    id: 'conjunto-dianteiro',
    name: 'Conjunto Dianteiro',
    category: 'JF011',
    transmission: 'JF011',
    condition: 'Original',
    photos: 5
  },
  {
    id: 'corpo-valvula-1',
    name: 'Corpo Válvula',
    category: 'JF011',
    transmission: 'JF011',
    condition: 'Original',
    photos: 4
  },
  {
    id: 'corrente-bomba',
    name: 'Corrente Bomba',
    category: 'JF011',
    transmission: 'JF011',
    condition: 'Original',
    photos: 5
  },
  {
    id: 'defletor-difererncial',
    name: 'Defletor Diferencial',
    category: 'JF011',
    transmission: 'JF011',
    condition: 'Original',
    photos: 4
  },
  {
    id: 'diferencial-6x49x20',
    name: 'Diferencial (6X49X20)',
    category: 'JF011',
    transmission: 'JF011',
    condition: 'Original',
    photos: 3
  },
  {
    id: 'diferencial-71x51x20',
    name: 'Diferencial - 71X51X20',
    category: 'JF011',
    transmission: 'JF011',
    condition: 'Original',
    photos: 6
  },
  {
    id: 'diferencial-4x4-71x50x20',
    name: 'Diferencial 4X4 - 71X50X20',
    category: 'JF011',
    transmission: 'JF011',
    condition: 'Original',
    photos: 5
  },
  {
    id: 'discos-1',
    name: 'Discos',
    category: 'JF011',
    transmission: 'JF011',
    condition: 'Original',
    photos: 3
  },
  {
    id: 'estator-bomba',
    name: 'Estator Bomba',
    category: 'JF011',
    transmission: 'JF011',
    condition: 'Original',
    photos: 5
  },
  {
    id: 'pistao-1',
    name: 'Pistão',
    category: 'JF011',
    transmission: 'JF011',
    condition: 'Original',
    photos: 3
  },
  {
    id: 'planearia',
    name: 'Planetária',
    category: 'JF011',
    transmission: 'JF011',
    condition: 'Original',
    photos: 6
  },
  {
    id: 'sensor',
    name: 'Sensor',
    category: 'JF011',
    transmission: 'JF011',
    condition: 'Original',
    photos: 3
  },
  {
    id: 'bomba-de-oleo-11',
    name: 'Bomba de Óleo',
    category: 'K310 FIAT 1.3',
    transmission: 'K310 FIAT 1.3',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'conjunto-diferencial-9',
    name: 'Conjunto Diferencial',
    category: 'K310 FIAT 1.3',
    transmission: 'K310 FIAT 1.3',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'conjunto-planeterio',
    name: 'Conjunto Planetário',
    category: 'K310 FIAT 1.3',
    transmission: 'K310 FIAT 1.3',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'conjunto-pulia-cvt',
    name: 'Conjunto Pulia CVT',
    category: 'K310 FIAT 1.3',
    transmission: 'K310 FIAT 1.3',
    condition: 'Original',
    photos: 5,
    cover: 3
  },
  {
    id: 'corpo-de-valvula-11',
    name: 'Corpo de Válvula',
    category: 'K310 FIAT 1.3',
    transmission: 'K310 FIAT 1.3',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'defletor-1',
    name: 'Defletor',
    category: 'K310 FIAT 1.3',
    transmission: 'K310 FIAT 1.3',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'discos-6',
    name: 'Discos',
    category: 'K310 FIAT 1.3',
    transmission: 'K310 FIAT 1.3',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'eixo-direta',
    name: 'Eixo Direta',
    category: 'K310 FIAT 1.3',
    transmission: 'K310 FIAT 1.3',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'bomba-oleo-livina',
    name: 'Bomba Óleo - livina',
    category: 'RE4F03A - NISSAN',
    transmission: 'RE4F03A (4 SP FWD)',
    application: 'BOMBA OLEONISSAN - LIVINA 1.8 (2009-2016)',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'bomba-oleo-2',
    name: 'Bomba Óleo',
    category: 'TF-72',
    transmission: 'TF72',
    condition: 'Original',
    photos: 4
  },
  {
    id: 'conjunto-diferencial-tf72',
    name: 'Conjunto Diferencial - TF72',
    category: 'TF-72',
    transmission: 'TF-72(61 DENTES)',
    condition: 'Original',
    photos: 4
  },
  {
    id: 'conjunto-embreagem-c1-c3-b2',
    name: 'Conjunto Embreagem - C1/C3/B2',
    category: 'TF-72',
    transmission: 'TF72',
    condition: 'Original',
    photos: 3
  },
  {
    id: 'planetaria',
    name: 'Planetária',
    category: 'TF-72',
    transmission: 'TF72',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'bomba-oleo-11',
    name: 'Bomba Óleo',
    category: 'TF81SC (6 SP F/4WD)',
    transmission: 'TF81sc',
    condition: 'Original',
    photos: 8
  },
  {
    id: 'catraca-2',
    name: 'Catraca',
    category: 'TF81SC (6 SP F/4WD)',
    transmission: 'TF81sc',
    condition: 'Original',
    photos: 3
  },
  {
    id: 'conjunto-diferencial-3',
    name: 'Conjunto Diferencial',
    category: 'TF81SC (6 SP F/4WD)',
    transmission: 'TF81sc',
    condition: 'Original',
    photos: 5,
    cover: 2
  },
  {
    id: 'corpo-valvula-11',
    name: 'Corpo Válvula',
    category: 'TF81SC (6 SP F/4WD)',
    transmission: 'TF81sc',
    condition: 'Original',
    photos: 5
  },
  {
    id: 'eixo-entrada-1',
    name: 'Eixo Entrada',
    category: 'TF81SC (6 SP F/4WD)',
    transmission: 'TF81sc',
    condition: 'Original',
    photos: 3
  },
  {
    id: 'planetaria-2',
    name: 'Planetária',
    category: 'TF81SC (6 SP F/4WD)',
    transmission: 'TF81sc',
    condition: 'Original',
    photos: 3
  },
  {
    id: 'tambor-c1',
    name: 'Tambor C1',
    category: 'TF81SC (6 SP F/4WD)',
    transmission: 'TF81sc',
    condition: 'Original',
    photos: 3
  },
  {
    id: 'tambor-c2',
    name: 'Tambor C2',
    category: 'TF81SC (6 SP F/4WD)',
    transmission: 'TF81sc',
    condition: 'Original',
    photos: 4,
    cover: 3
  },
  {
    id: 'tambor-c3',
    name: 'Tambor C3',
    category: 'TF81SC (6 SP F/4WD)',
    transmission: 'TF81sc',
    condition: 'Original',
    photos: 4
  },
  {
    id: 'bomba-de-oleo-9',
    name: 'Bomba de Óleo',
    category: 'U442E (4 SP FWD)',
    transmission: 'U442',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'bomba-oleo-4',
    name: 'Bomba Óleo',
    category: 'U442E (4 SP FWD)',
    transmission: 'U442E (4 SP FWD)',
    condition: 'Original',
    photos: 4
  },
  {
    id: 'capa-shell',
    name: 'Capa Shell',
    category: 'U442E (4 SP FWD)',
    transmission: 'U442E (4 SP FWD)',
    condition: 'Original',
    photos: 4
  },
  {
    id: 'chave-seletora-5',
    name: 'Chave Seletora',
    category: 'U442E (4 SP FWD)',
    transmission: 'U442',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'chave-seletora',
    name: 'Chave Seletora',
    category: 'U442E (4 SP FWD)',
    transmission: 'U442E (4 SP FWD)',
    condition: 'Original',
    photos: 4
  },
  {
    id: 'chicote-3',
    name: 'Chicote',
    category: 'U442E (4 SP FWD)',
    transmission: 'U442',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'chave-seletora-1',
    name: 'Chicote Solenoides',
    category: 'U442E (4 SP FWD)',
    transmission: 'U442E (4 SP FWD)',
    condition: 'Original',
    photos: 4
  },
  {
    id: 'conjunto-da-embreagem-planetaria',
    name: 'Conjunto da Embreagem Planetária',
    category: 'U442E (4 SP FWD)',
    transmission: 'U442',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'conjunto-diferencial',
    name: 'Conjunto Diferencial',
    category: 'U442E (4 SP FWD)',
    transmission: 'U440',
    condition: 'Original',
    photos: 5
  },
  {
    id: 'cubo-embreagem-diretra',
    name: 'Cubo Embreagem Direta',
    category: 'U442E (4 SP FWD)',
    transmission: 'U442',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'embreagem-unidirecional',
    name: 'Embreagem Unidirecional',
    category: 'U442E (4 SP FWD)',
    transmission: 'U442',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'engrenagem-overdrive',
    name: 'Engrenagem Overdrive',
    category: 'U442E (4 SP FWD)',
    transmission: 'U442',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'hub-separador',
    name: 'HUB Separador',
    category: 'U442E (4 SP FWD)',
    transmission: 'U442',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'tambor-eixo',
    name: 'Tambor + Eixo',
    category: 'U442E (4 SP FWD)',
    transmission: 'U442E (4 SP FWD)',
    condition: 'Original',
    photos: 4
  },
  {
    id: 'tambor-solar',
    name: 'Tambor Solar',
    category: 'U442E (4 SP FWD)',
    transmission: 'U442',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'tambor-submarcha',
    name: 'Tambor Submarcha',
    category: 'U442E (4 SP FWD)',
    transmission: 'U442',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'tambor-traseiro',
    name: 'Tambor Traseiro',
    category: 'U442E (4 SP FWD)',
    transmission: 'U442E (4 SP FWD)',
    condition: 'Original',
    photos: 4
  },
  {
    id: 'tampa-traseira-11',
    name: 'Tampa Traseira',
    category: 'U442E (4 SP FWD)',
    transmission: 'U442',
    condition: 'Original',
    photos: 3
  },
  {
    id: 'arevore-intermediaria',
    name: 'Árvore Intermediária',
    category: 'U442E (4 SP FWD)',
    transmission: 'U442',
    condition: 'Original',
    photos: 2
  },
  {
    id: 'corpo-valvula-10',
    name: 'Corpo Válvula',
    category: 'V4A51',
    transmission: 'V4A51',
    condition: 'Original',
    photos: 3
  },
  {
    id: 'planetaria-1',
    name: 'Planetária',
    category: 'V4A51',
    transmission: 'V4A51',
    condition: 'Original',
    photos: 3
  },
  {
    id: 'suporte-traseiro',
    name: 'Suporte Traseiro',
    category: 'V4A51',
    transmission: 'V4A51',
    condition: 'Original',
    photos: 3
  },
  {
    id: 'tambor-overdrive',
    name: 'Tambor Overdrive',
    category: 'V4A51',
    transmission: 'V4A51',
    condition: 'Original',
    photos: 3
  }
];

/* ============================================================
   Consultas ao catálogo — não precisa mexer daqui para baixo
   ============================================================ */

/* Caminho das fotos. A foto 1 tem uma versão reduzida (-thumb)
   usada nos cards; as demais só existem no tamanho grande. */
function productPhoto(product, numero) {
  var n = numero || 1;
  return '/assets/produtos/' + product.id + '/' + (n < 10 ? '0' + n : n) + '.avif';
}

function productThumb(product) {
  var n = product.cover || 1;
  return '/assets/produtos/' + product.id + '/' + (n < 10 ? '0' + n : n) + '-thumb.avif';
}

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
   número ao lado da categoria e marcar as que ainda estão vazias. */
function countByCategory() {
  var counts = {};
  for (var i = 0; i < PRODUCTS.length; i++) {
    counts[PRODUCTS[i].category] = (counts[PRODUCTS[i].category] || 0) + 1;
  }
  return counts;
}

/* Busca sem acento e sem diferenciar maiúsculas, olhando nome,
   transmissão, categoria e aplicação. */
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
      [p.name, p.category, p.transmission, p.application || '', p.condition || ''].join(' ')
    );
    return terms.every(function (term) { return haystack.indexOf(term) >= 0; });
  });
}

/* Peças da mesma transmissão; completa com outras se faltar. */
function getRelatedProducts(product, limit) {
  var max = limit || 4;
  var mesma = PRODUCTS.filter(function (p) {
    return p.category === product.category && p.id !== product.id;
  });
  if (mesma.length >= max) return mesma.slice(0, max);

  var outras = PRODUCTS.filter(function (p) {
    return p.category !== product.category && p.id !== product.id;
  });
  return mesma.concat(outras.slice(0, max - mesma.length));
}

/* Endereço de diretório: /peca/<id>/ — a página existe como arquivo,
   gerada por ferramentas/gerar-site.py. */
function buildProductUrl(productId) {
  return '/peca/' + productId + '/';
}

function buildCategoryUrl(category) {
  return '/loja/?transmissao=' + encodeURIComponent(category);
}

/* Card usado na loja e na lista de peças relacionadas.
   Recebe o índice porque .map() já passa: as primeiras da grade estão
   acima da dobra e carregam de imediato; deixá-las em lazy adia o
   pedido para depois do layout e a página aparece vazia por um tempo. */
function productCardHtml(p, indice) {
  var acimaDaDobra = (indice || 0) < 6;
  return '<a class="product" href="' + escapeHtml(buildProductUrl(p.id)) + '">' +
    '<div class="thumb">' +
      (p.condition ? '<span class="badge badge--original">' + escapeHtml(p.condition) + '</span>' : '') +
      '<img src="' + escapeHtml(productThumb(p)) + '" width="400" height="400" decoding="async" ' +
        'loading="' + (acimaDaDobra ? 'eager' : 'lazy') + '" ' +
        (acimaDaDobra ? 'fetchpriority="high" ' : '') +
        'alt="' + escapeHtml(p.name + ' para câmbio ' + p.category) + '" />' +
    '</div>' +
    '<div class="product-body">' +
      '<h2>' + escapeHtml(p.name) + '</h2>' +
      '<p class="product-cat-tag">' + escapeHtml(p.category) + '</p>' +
      '<span class="product-cta">Ver detalhes <svg class="ico" aria-hidden="true"><use href="#i-arrow-right"></use></svg></span>' +
    '</div>' +
  '</a>';
}
