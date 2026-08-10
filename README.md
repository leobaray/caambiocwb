# CAAMBIOCWB — site institucional e catálogo

Site estático (HTML, CSS e JavaScript puro) da CAAMBIOCWB, loja de peças
para transmissão automática em Curitiba — PR. Sem build, sem framework,
sem dependência de servidor: é só publicar a pasta.

## Como rodar

Abrir o `index.html` direto no navegador funciona, mas a página do produto
usa a URL (`produto.html?id=...`), então o ideal é subir um servidor local:

```bash
python -m http.server 8000
# depois abra http://localhost:8000
```

## Estrutura

```
index.html      página inicial
loja.html       catálogo, filtro por transmissão e busca
produto.html    página de uma peça (montada por produto.js)
sobre.html      sobre a empresa e como funciona o atendimento
contato.html    formulário, dados de contato e mapa
404.html        página de erro

styles.css      toda a folha de estilo (tokens no topo do arquivo)
site.js         dados da empresa + comportamentos de todas as páginas
products.js     catálogo de peças e consultas
loja.js         lógica da tela de catálogo
produto.js      lógica da página de peça

assets/         imagens usadas no site
referencia/     material de origem (prints e textos do site antigo) — não é publicado
```

## Manutenção do dia a dia

**Adicionar, editar ou remover uma peça** → `products.js`. As instruções
estão comentadas no topo do arquivo. Ao criar uma peça nova, acrescente
também a URL dela no `sitemap.xml`.

**Trocar telefone, e-mail, endereço ou horário** → `site.js`, no objeto
`SITE`, no começo do arquivo. Os textos que aparecem no rodapé e na faixa
verde estão nos HTMLs (o mesmo bloco se repete em todas as páginas — se
mudar um, mude nos cinco).

**Foto de produto** → coloque o arquivo em `assets/produtos/` e preencha o
campo `image` da peça. Enquanto não houver foto, o site mostra um ícone.

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

## Domínio

Os endereços canônicos, o `sitemap.xml`, o `robots.txt`, as tags Open Graph
e `SITE.origin` (em `site.js`) apontam para `https://caambiocwb.com.br`.
Se o site for publicado em outro domínio, troque nesses lugares.

## Dependências externas

- Google Fonts — Lora (títulos) e Montserrat (texto)
- Font Awesome 6.5.2 via cdnjs — ícones
- Google Maps embed na página de contato

Nada disso exige conta ou chave de API.
