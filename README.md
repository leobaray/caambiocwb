# CAAMBIOCWB — site institucional e catálogo

Site estático (HTML, CSS e JavaScript puro) da CAAMBIOCWB, loja de peças
para transmissão automática em Curitiba — PR. Sem build, sem framework,
sem dependência de servidor: é só publicar a pasta.

São **347 peças em 40 transmissões, com 1.138 fotos**, importadas do site
antigo em Wix.

## Como rodar

Abrir o `index.html` direto no navegador funciona, mas a página do produto
usa a URL (`produto.html?id=...`), então o ideal é subir um servidor local:

```bash
python -m http.server 8000
# depois abra http://localhost:8000
```

## Estrutura

```
index.html      página inicial (com vitrine de peças)
loja.html       catálogo, filtro por transmissão e busca
produto.html    página de uma peça com galeria (montada por produto.js)
sobre.html      sobre a empresa e como funciona o atendimento
contato.html    formulário, dados de contato e mapa
404.html        página de erro

styles.css      toda a folha de estilo (tokens no topo do arquivo)
site.js         dados da empresa + comportamentos de todas as páginas
products.js     catálogo de peças e consultas
home.js         vitrine da página inicial
loja.js         lógica da tela de catálogo
produto.js      lógica da página de peça

assets/produtos/<id>/    fotos que vão ao ar (AVIF 900px + capa de 400px)
assets/parceiros/        logos das empresas parceiras
fotos-originais/<id>/    originais em JPG vindos do site antigo (216 MB)
referencia/              material de origem do site antigo
```

## As fotos

`fotos-originais/` guarda as **1.138 fotos originais** baixadas do site em
Wix, na resolução em que o dono publicou (900×1600 na maioria). Essa pasta
está no `.gitignore` para não inchar o repositório — **faça backup dela em
um HD ou na nuvem**, porque é a única cópia fora do Wix. Para versioná-la
junto, apague a linha `fotos-originais/` do `.gitignore`.

`assets/produtos/` tem as versões que o site usa, geradas a partir dos
originais:

- `NN.avif` — 900px no lado maior, usada na página da peça e na galeria.
- `NN-thumb.avif` — 400×400, recortada no **foco da peça** (não no centro
  geométrico da foto) e usada no card da loja.

Algumas fotos do cadastro antigo são prints com uma tarja de texto do
WhatsApp em cima. Quando isso acontece na foto 01, o campo `cover` do
produto aponta para a primeira foto limpa, e é ela que vira a capa.

## Manutenção do dia a dia

**Adicionar, editar ou remover uma peça** → `products.js`. As instruções
estão comentadas no topo do arquivo. Ao criar uma peça nova, acrescente
também a URL dela no `sitemap.xml`.

**Fotos de uma peça nova** → crie `assets/produtos/<id>/`, coloque
`01.avif`, `02.avif`… (900px) e a capa `01-thumb.avif` (400×400), e ajuste
o campo `photos` para a quantidade.

**Trocar telefone, e-mail, endereço ou horário** → `site.js`, no objeto
`SITE`, no começo do arquivo. Os textos que aparecem no rodapé e na faixa
verde estão nos HTMLs (o mesmo bloco se repete em todas as páginas — se
mudar um, mude nos seis).

**Perfis sociais** → hoje o rodapé só tem links que funcionam de verdade
(WhatsApp, e-mail, telefone e mapa). Quando existirem os perfis do
Instagram e do Facebook, é só acrescentá-los no bloco `.socials`, que está
comentado nos arquivos HTML.

## Formulário de contato

Não existe back-end. O formulário valida os campos, monta a mensagem e
abre o WhatsApp com o texto pronto — ou o programa de e-mail, se o
visitante preferir. Nada é armazenado e nada é enviado sem o visitante
confirmar. Se um dia houver servidor, o ponto de troca é a função
`initContactForm()` em `site.js`.

## Contraste

`ferramentas/auditoria-contraste.js` mede o contraste de todo texto
visível na página aberta. Cole no console do navegador (F12) e ele lista
o que estiver abaixo do mínimo WCAG AA. Rode depois de mexer em cor, e
lembre dos estados que só aparecem em situação específica: menu do
celular aberto, loja sem resultado, e a página de contato fora do
horário comercial.

Os tokens de cor no topo do `styles.css` já têm a razão de contraste
anotada — ao trocar um verde, confira que o novo valor mantém a conta.

## Domínio

Os endereços canônicos, o `sitemap.xml`, o `robots.txt`, as tags Open Graph
e `SITE.origin` (em `site.js`) apontam para `https://caambiocwb.com.br`.
Se o site for publicado em outro domínio, troque nesses lugares.

## Dependências externas

- Google Fonts — Lora (títulos) e Montserrat (texto)
- Font Awesome 6.5.2 via cdnjs — ícones
- Google Maps embed na página de contato

Nada disso exige conta ou chave de API.
