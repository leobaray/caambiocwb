# CAAMBIOCWB — site e catálogo de peças

Site da CAAMBIOCWB, loja de peças para transmissão automática em
Curitiba — PR. HTML, CSS e JavaScript puro: sem framework, sem etapa de
build, sem banco. Publicar é copiar a pasta para o servidor.

São **347 peças em 40 transmissões, com 1.138 fotos**.

## Rodar na sua máquina

A página do produto lê a peça pela URL (`produto.html?id=...`), então
abrir o arquivo direto pelo Windows não funciona. Suba um servidor:

```bash
python ferramentas/servidor.py
# abra http://localhost:8000
```

## Estrutura

```
index.html      página inicial
loja.html       catálogo, filtro por transmissão e busca
produto.html    página da peça, com galeria (montada por produto.js)
sobre.html      a empresa e como funciona o atendimento
contato.html    formulário, dados de contato e mapa
404.html        página de endereço inexistente

styles.css      toda a folha de estilo (as cores ficam no topo do arquivo)
site.js         dados da empresa + comportamento comum a todas as páginas
products.js     catálogo de peças e as consultas sobre ele
home.js         vitrine da página inicial
loja.js         tela do catálogo
produto.js      página da peça

assets/produtos/<id>/   fotos publicadas (AVIF)
assets/parceiros/       logos das empresas parceiras
ferramentas/            servidor local e auditoria de contraste
```

## Adicionar, editar ou remover uma peça

Tudo acontece no **`products.js`** — as instruções completas estão
comentadas no topo do arquivo. Em resumo:

1. Copie um bloco `{ ... }` do array `PRODUCTS`, cole no fim e preencha.
   O `id` precisa ser único e **não muda depois de publicado**: é ele que
   forma o link da peça e o nome da pasta das fotos.
2. Crie `assets/produtos/<id>/` e coloque as fotos numeradas: `01.avif`,
   `02.avif`… com 900px no lado maior.
3. A capa (a foto que aparece no card do catálogo) precisa de uma versão
   quadrada de 400×400 chamada `01-thumb.avif`. Se a foto 01 não servir
   como capa, aponte o campo `cover` para o número de outra — aí é o
   `-thumb` dela que precisa existir.
4. Ajuste `photos` para a quantidade de fotos.
5. Acrescente a URL da peça no `sitemap.xml`.

Para remover, apague o bloco inteiro e a pasta de fotos.

## Trocar telefone, e-mail, endereço ou horário

No **`site.js`**, no objeto `SITE` no começo do arquivo. O link do mapa e
o indicador de "aberto agora" saem daí sozinhos.

Esses dados também aparecem escritos no rodapé e na faixa verde dos seis
HTMLs. O bloco é idêntico nos seis arquivos — se mudar em um, mude nos
outros cinco.

## Formulário de contato

Não existe servidor por trás. O formulário valida os campos, monta a
mensagem e abre o WhatsApp com o texto pronto — ou o programa de e-mail,
se a pessoa preferir. Nada é armazenado e nada sai sem ela confirmar.

Se um dia houver back-end, o ponto de troca é a função
`initContactForm()` no `site.js`.

## Ícones e fontes

Os ícones são SVG embutidos no próprio HTML (Font Awesome Free 6.5.2,
CC BY 4.0). Os 21 em uso pesam 11 KB; a versão em fonte baixava 337 KB de
CSS e webfonts a cada visita. Para trocar ou acrescentar um ícone, pegue
o SVG em fontawesome.com, vire um `<symbol>` no bloco que fica logo
depois do `<body>` e use com `<svg class="ico"><use href="#i-nome">`.

As fontes (Lora nos títulos, Montserrat no texto) vêm do Google Fonts,
só nos pesos usados.

## Contraste

`ferramentas/auditoria-contraste.js` mede o contraste de todo texto
visível na página aberta. Cole no console do navegador (F12) e ele lista
o que estiver abaixo do mínimo WCAG AA. Vale rodar depois de mexer em
cor, lembrando dos estados que só aparecem em situação específica: menu
do celular aberto, catálogo sem resultado, e a página de contato fora do
horário comercial.

Os tokens de cor no topo do `styles.css` têm a razão de contraste
anotada ao lado.

## As fotos originais

As fotos publicadas em `assets/produtos/` são versões reduzidas. Os
originais em alta ficam em `fotos-originais/`, fora do controle de versão
por causa do tamanho (216 MB). Se essa pasta veio junto, guarde uma
cópia: é o arquivo bruto das imagens da loja.

## Domínio

Os endereços canônicos, o `sitemap.xml`, o `robots.txt`, as tags Open
Graph e `SITE.origin` (no `site.js`) apontam para
`https://caambiocwb.com.br`. Publicando em outro domínio, troque nesses
cinco lugares.

## O que o site usa de fora

- Google Fonts — Lora e Montserrat
- Google Maps, no mapa da página de contato

Nenhum dos dois exige conta ou chave de API.
