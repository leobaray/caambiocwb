# CAAMBIOCWB — site e catálogo de peças

Site da CAAMBIOCWB, loja de peças para transmissão automática em
Curitiba — PR. HTML, CSS e JavaScript puro. Sem framework e sem
dependência de terceiro em tempo de execução: as fontes e os ícones são
servidos pelo próprio site.

São **347 peças em 40 transmissões, com 1.138 fotos**.

## Endereços

Tudo em diretório, sem `.html` e sem `?id=`:

```
/                          início
/loja/                     catálogo
/loja/?transmissao=6R80    catálogo filtrado
/sobre/                    sobre a empresa
/contato/                  contato
/peca/bomba-oleo-virtus/   página de uma peça (347 delas)
```

Como as páginas de peça existem como arquivo, cada uma é uma página de
verdade: buscador, prévia de link do WhatsApp e leitor que não roda
JavaScript enxergam o conteúdo inteiro.

## Rodar na sua máquina

```bash
python ferramentas/servidor.py
# abra http://localhost:8000
```

## Como o site é montado

As páginas publicadas são **geradas**. As fontes ficam em `fonte/` e o
catálogo em `products.js`; um script junta os dois:

```bash
python ferramentas/gerar-site.py
```

Isso reescreve `index.html`, `404.html`, `loja/`, `sobre/`, `contato/`,
as 347 pastas em `peca/`, o `sitemap.xml` e o `site.webmanifest`.
**Rode sempre depois de mexer em `products.js` ou em `fonte/`** — editar
o HTML gerado direto não adianta, a próxima geração sobrescreve.

```
fonte/_layout.html      esqueleto do documento (head, marcadores)
fonte/_cabecalho.html   barra do topo + cabeçalho, comuns a todas
fonte/_rodape.html      faixa de contato + rodapé, comuns a todas
fonte/_icones.svg       os 21 ícones em SVG
fonte/home.html         conteúdo da página inicial
fonte/loja.html         conteúdo do catálogo
fonte/sobre.html        conteúdo do sobre
fonte/contato.html      conteúdo do contato
fonte/404.html          conteúdo do erro
```

Cada arquivo de conteúdo começa com um bloco `<!--meta ... -->` com
título, descrição e dados de compartilhamento daquela página. A página
da peça não tem arquivo de fonte: o gerador a monta a partir do catálogo.

```
styles.css      toda a folha de estilo (fontes e cores no topo)
site.js         dados da empresa + comportamento comum
products.js     catálogo de peças e as consultas sobre ele
home.js         vitrine da página inicial
loja.js         filtro, busca e paginação do catálogo
produto.js      só a galeria de fotos; o resto da página é estático

assets/produtos/<id>/   fotos publicadas (AVIF)
assets/fontes/          Lora e Montserrat, auto-hospedadas
assets/parceiros/       logos das empresas parceiras
ferramentas/            gerador, servidor local, auditoria de contraste
```

## Adicionar, editar ou remover uma peça

1. Mexa no array `PRODUCTS` do **`products.js`** — as instruções
   completas estão comentadas no topo do arquivo. O `id` precisa ser
   único e **não muda depois de publicado**: é ele que forma o endereço
   da peça e o nome da pasta das fotos.
2. Crie `assets/produtos/<id>/` com as fotos numeradas `01.avif`,
   `02.avif`… com 900px no lado maior.
3. A capa (a foto do card no catálogo) precisa de uma versão quadrada de
   400×400 chamada `01-thumb.avif`. Se a foto 01 não servir como capa,
   aponte o campo `cover` para outra — aí é o `-thumb` dela que precisa
   existir.
4. Ajuste `photos` para a quantidade de fotos.
5. Rode `python ferramentas/gerar-site.py`.

Para remover, apague o bloco `{ ... }`, apague a pasta de fotos e gere
de novo. O gerador recria `peca/` do zero a cada execução, então a
página da peça removida some sozinha.

## Trocar telefone, e-mail, endereço ou horário

Em dois lugares:

- **`site.js`**, no objeto `SITE` — de onde saem o link do mapa e o
  indicador de "aberto agora".
- **`fonte/_cabecalho.html`** e **`fonte/_rodape.html`**, onde os dados
  aparecem escritos. Agora são um arquivo só cada, não mais o mesmo
  bloco repetido em seis páginas.

Depois, gere o site de novo.

## Formulário de contato

Não existe servidor por trás. O formulário valida os campos, monta a
mensagem e abre o WhatsApp com o texto pronto — ou o programa de e-mail,
se a pessoa preferir. Nada é armazenado e nada sai sem ela confirmar.

Se um dia houver back-end, o ponto de troca é a função
`initContactForm()` no `site.js`.

## Fontes e ícones

As fontes são as versões variáveis de Lora e Montserrat, auto-hospedadas
em `assets/fontes/` (37 KB cada, subconjunto latino, com `preload` no
`<head>`). O visitante não passa por um servidor de terceiro para ler o
site.

Os ícones são SVG embutidos no HTML (Font Awesome Free 6.5.2, CC BY 4.0).
Os 21 em uso pesam 11 KB; a versão em fonte baixava 337 KB. Para
acrescentar um, pegue o SVG em fontawesome.com, vire um `<symbol>` em
`fonte/_icones.svg` e use com `<svg class="ico"><use href="#i-nome">`.

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

## Publicar

É um site estático: sobe a pasta e pronto. Não precisa de reescrita de
URL no servidor — os endereços são diretórios com `index.html` dentro,
que qualquer hospedagem serve.

Não suba `fonte/`, `ferramentas/` nem `fotos-originais/`: não fazem parte
do site publicado. Se subir, o servidor incluído já bloqueia o acesso a
elas.

## Domínio

Os endereços canônicos, o `sitemap.xml`, o `robots.txt`, as tags Open
Graph e `SITE.origin` (no `site.js`) apontam para
`https://caambiocwb.com.br`. Publicando em outro domínio, troque a
constante `ORIGEM` em `ferramentas/gerar-site.py`, o `SITE.origin` e o
`robots.txt`, e gere de novo.

## O que o site usa de fora

Só o mapa do Google na página de contato. Nada mais.
