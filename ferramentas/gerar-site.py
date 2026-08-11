"""Monta o site a partir de fonte/ e do catálogo em products.js.

Por que existe: as URLs são de diretório (/loja/, /peca/<id>/) e as 347
páginas de peça nascem prontas em HTML — sem isso o endereço teria
".html" e "?id=", e leitor que não roda JavaScript (buscador, prévia de
link, IA) veria a página vazia.

Rode depois de mexer em products.js ou em qualquer arquivo de fonte/:

    python ferramentas/gerar-site.py

O que ele escreve:
    index.html, 404.html
    loja/index.html, sobre/index.html, contato/index.html
    peca/<id>/index.html   (uma por peça)
    sitemap.xml, site.webmanifest
"""
import hashlib
import io
import json
import os
import re
import shutil
import sys
from datetime import date
from urllib.parse import quote

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FONTE = os.path.join(RAIZ, 'fonte')
ORIGEM = 'https://caambiocwb.com.br'
HOJE = date.today().isoformat()

os.chdir(RAIZ)


# ---------------------------------------------------------------- utilidades

def ler(caminho):
    return io.open(caminho, encoding='utf-8').read()


def escrever(caminho, conteudo):
    pasta = os.path.dirname(caminho)
    if pasta:
        os.makedirs(pasta, exist_ok=True)
    io.open(caminho, 'w', encoding='utf-8', newline='\n').write(conteudo)


def esc(texto):
    return (str(texto).replace('&', '&amp;').replace('<', '&lt;')
            .replace('>', '&gt;').replace('"', '&quot;').replace("'", '&#39;'))


def versao(arquivo):
    """Hash curto do conteúdo, para o navegador não servir CSS velho."""
    try:
        return hashlib.sha1(io.open(arquivo, 'rb').read()).hexdigest()[:8]
    except OSError:
        return HOJE.replace('-', '')


# ---------------------------------------------------------------- catálogo

def carregar_catalogo():
    src = ler(os.path.join(RAIZ, 'products.js'))

    categorias = re.findall(r"^  '(.*?)',?$",
                            src.split('var CATEGORIES = [')[1].split('];')[0], re.M)
    categorias = [c.replace("\\'", "'") for c in categorias]

    corpo = src.split('var PRODUCTS = [')[1].split('\n];')[0]
    produtos = []
    for bruto in re.findall(r'\{(.*?)\n  \}', corpo, re.S):
        item = {}
        for chave, valor in re.findall(r"(\w+):\s*'((?:[^'\\]|\\.)*)'", bruto):
            item[chave] = valor.replace("\\'", "'").replace('\\\\', '\\')
        for chave, valor in re.findall(r'(\w+):\s*(\d+)', bruto):
            item[chave] = int(valor)
        produtos.append(item)
    return categorias, produtos


def url_peca(pid):
    return '/peca/' + pid + '/'


def url_categoria(cat):
    return '/loja/?transmissao=' + quote(cat, safe='')


def caminho_foto(p, n):
    return '/assets/produtos/%s/%02d.avif' % (p['id'], n)


def caminho_capa(p):
    return '/assets/produtos/%s/%02d-thumb.avif' % (p['id'], p.get('cover', 1))


def card(p, indice=99):
    acima = indice < 6
    return (
        '<a class="product" href="' + esc(url_peca(p['id'])) + '">'
        '<div class="thumb">'
        + ('<span class="badge badge--original">' + esc(p['condition']) + '</span>'
           if p.get('condition') else '') +
        '<img src="' + esc(caminho_capa(p)) + '" width="400" height="400" decoding="async" '
        'loading="' + ('eager' if acima else 'lazy') + '" '
        + ('fetchpriority="high" ' if acima else '') +
        'alt="' + esc(p['name'] + ' para câmbio ' + p['category']) + '" />'
        '</div>'
        '<div class="product-body">'
        '<h2>' + esc(p['name']) + '</h2>'
        '<p class="product-cat-tag">' + esc(p['category']) + '</p>'
        '<span class="product-cta">Ver detalhes '
        '<svg class="ico" aria-hidden="true"><use href="#i-arrow-right"></use></svg></span>'
        '</div>'
        '</a>'
    )


def relacionadas(p, todos, limite=4):
    mesma = [x for x in todos if x['category'] == p['category'] and x['id'] != p['id']]
    if len(mesma) >= limite:
        return mesma[:limite]
    outras = [x for x in todos if x['category'] != p['category'] and x['id'] != p['id']]
    return mesma + outras[:limite - len(mesma)]


# ---------------------------------------------------------------- montagem

LAYOUT = ler(os.path.join(FONTE, '_layout.html'))
CABECALHO = ler(os.path.join(FONTE, '_cabecalho.html')).rstrip()
RODAPE = ler(os.path.join(FONTE, '_rodape.html')).rstrip()
ICONES = ler(os.path.join(FONTE, '_icones.svg')).rstrip()

V_CSS = versao('styles.css')
V_JS = {a: versao(a) for a in ('site.js', 'products.js', 'loja.js', 'produto.js', 'home.js')}

OG_PADRAO = {
    'og_imagem': ORIGEM + '/assets/og-caambiocwb.jpg',
    'og_imagem_alt': 'CAAMBIOCWB — peças para transmissão automática, Curitiba — PR',
    'og_imagem_tipo': 'image/jpeg',
    'og_imagem_largura': '1200',
    'og_imagem_altura': '630',
}

JSONLD_SITE = json.dumps({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': 'CAAMBIOCWB',
    'url': ORIGEM + '/',
    'inLanguage': 'pt-BR',
}, ensure_ascii=False, indent=2)


def scripts_de(nome):
    lista = ['site.js']
    if nome == 'home':
        lista += ['products.js', 'home.js']
    elif nome == 'loja':
        lista += ['products.js', 'loja.js']
    elif nome == 'peca':
        lista += ['products.js', 'produto.js']
    return '\n'.join('  <script src="/%s?v=%s"></script>' % (a, V_JS[a]) for a in lista)


def bloco_jsonld(blocos):
    if not blocos:
        return ''
    return '\n'.join('  <script type="application/ld+json">\n%s\n  </script>'
                     % b.strip() for b in blocos)


def montar(meta, conteudo, canonical, jsonld, scripts):
    dados = dict(OG_PADRAO)
    dados.update(meta)
    dados.update({
        'canonical': canonical,
        'jsonld': bloco_jsonld(jsonld),
        'conteudo': conteudo.rstrip(),
        'cabecalho': CABECALHO,
        'rodape': RODAPE,
        'icones': ICONES,
        'scripts': scripts,
        'versao': V_CSS,
        'robots': ('  <meta name="robots" content="noindex, follow" />'
                   if meta.get('noindex') else ''),
    })
    saida = LAYOUT
    for chave, valor in dados.items():
        saida = saida.replace('{{%s}}' % chave, str(valor))
    sobrou = re.findall(r'\{\{(\w+)\}\}', saida)
    if sobrou:
        raise SystemExit('marcador sem valor no layout: %s' % sorted(set(sobrou)))
    return re.sub(r'\n{3,}', '\n\n', saida)


def ler_fonte(nome):
    bruto = ler(os.path.join(FONTE, nome + '.html'))
    m = re.match(r'<!--meta\n(.*?)\n-->\n', bruto, re.S)
    meta = json.loads(m.group(1))
    return meta, bruto[m.end():]


# ---------------------------------------------------------------- páginas

def gerar_paginas_fixas():
    fixas = [('home', 'index.html', ORIGEM + '/'),
             ('loja', 'loja/index.html', ORIGEM + '/loja/'),
             ('sobre', 'sobre/index.html', ORIGEM + '/sobre/'),
             ('contato', 'contato/index.html', ORIGEM + '/contato/'),
             ('404', '404.html', ORIGEM + '/404.html')]
    for nome, destino, canonical in fixas:
        meta, conteudo = ler_fonte(nome)
        blocos = []
        proprio = os.path.join(FONTE, nome + '.jsonld')
        if os.path.exists(proprio):
            blocos.append(ler(proprio))
        if nome == 'home':
            blocos.append(JSONLD_SITE)
        escrever(destino, montar(meta, conteudo, canonical, blocos, scripts_de(meta['pagina'])))
        print('  %-22s %s' % (destino, meta['titulo'][:52]))


def conteudo_peca(p, todos):
    cat_url = url_categoria(p['category'])
    capa = p.get('cover', 1)
    alt = p['name'] + ' para câmbio ' + p['category']
    wa = ('https://wa.me/5541996939384?text=' + quote(
        'Olá! Tenho interesse na peça "%s" para o câmbio %s. Ainda tem disponível?'
        % (p['name'], p['transmission'])))

    miniaturas = ''
    if p['photos'] > 1:
        itens = ''.join(
            '<button type="button" class="gallery-thumb%s" data-photo="%s" '
            'aria-label="Ver foto %d de %d"><img src="%s" loading="lazy" alt="" /></button>'
            % (' is-active' if i == capa else '', esc(caminho_foto(p, i)), i, p['photos'],
               esc(caminho_foto(p, i)))
            for i in range(1, p['photos'] + 1))
        miniaturas = ('\n          <div class="gallery-strip" role="group" '
                      'aria-label="Fotos da peça">' + itens + '</div>'
                      '\n          <p class="gallery-hint">%d fotos desta peça</p>' % p['photos'])

    fichas = [('Transmissão', esc(p['transmission']))]
    if p.get('application'):
        fichas.append(('Aplicação', esc(p['application'])))
    fichas.append(('Categoria', '<a href="%s">%s</a>' % (esc(cat_url), esc(p['category']))))
    if p.get('condition'):
        fichas.append(('Condição', '<span class="badge badge--original">%s</span>'
                       % esc(p['condition'])))
    fichas.append(('Disponibilidade', 'Sob consulta — confirmamos no atendimento'))
    ficha_html = ''.join('<div><dt>%s</dt><dd>%s</dd></div>' % (r, v) for r, v in fichas)

    parceiras = relacionadas(p, todos)
    titulo_rel = ('Outras peças para ' + p['category']
                  if parceiras and parceiras[0]['category'] == p['category']
                  else 'Outras peças do catálogo')

    return """<main id="conteudo">

    <section class="section">
      <div class="container" id="product-container" data-produto="{pid}">

        <nav class="breadcrumbs" aria-label="Você está em">
          <a href="/">Início</a>
          <span class="sep" aria-hidden="true">/</span>
          <a href="/loja/">Catálogo</a>
          <span class="sep" aria-hidden="true">/</span>
          <a href="{cat_url}">{categoria}</a>
          <span class="sep" aria-hidden="true">/</span>
          <span class="current">{nome}</span>
        </nav>

        <div class="product-detail">
          <div class="product-gallery">
            <div class="product-media">
              <img id="product-photo" src="{foto}" alt="{alt}" fetchpriority="high" />
            </div>{miniaturas}
          </div>

          <div>
            <div class="product-headline">
              <h1>{nome}</h1>
              <p class="product-ref">Ref. {ref}</p>
            </div>

            <p class="product-short">{resumo}</p>

            <dl class="spec-list">{ficha}</dl>

            <div class="product-actions">
              <a class="btn btn-wa" href="{wa}" target="_blank" rel="noopener">
                <svg class="ico" aria-hidden="true"><use href="#i-whatsapp"></use></svg> Orçamento no WhatsApp</a>
              <a class="btn btn-outline" href="tel:+5541996939384">
                <svg class="ico" aria-hidden="true"><use href="#i-phone"></use></svg> (41) 99693-9384</a>
            </div>
          </div>
        </div>

      </div>
    </section>

    <section class="section section--surface">
      <div class="container">
        <h2 class="rule-title"><span>{titulo_rel}</span></h2>
        <div class="products-grid products-grid--4">{cards}</div>
      </div>
    </section>

  </main>""".format(
        pid=esc(p['id']), cat_url=esc(cat_url), categoria=esc(p['category']),
        nome=esc(p['name']), foto=esc(caminho_foto(p, capa)), alt=esc(alt),
        miniaturas=miniaturas, ref=esc(p['id'].upper()),
        resumo=esc(resumo_peca(p)), ficha=ficha_html, wa=esc(wa),
        titulo_rel=esc(titulo_rel), cards=''.join(card(x, 99) for x in parceiras))


def resumo_peca(p):
    texto = '%s para transmissão automática %s.' % (p['name'], p['transmission'])
    if p.get('application'):
        texto += ' Aplicação em %s.' % p['application']
    return texto


def gerar_pecas(produtos):
    if os.path.isdir('peca'):
        shutil.rmtree('peca')
    for p in produtos:
        canonical = ORIGEM + url_peca(p['id'])
        descricao = resumo_peca(p) + ' Orçamento pelo WhatsApp.'
        fotos = [ORIGEM + caminho_foto(p, i) for i in range(1, p['photos'] + 1)]
        meta = {
            'titulo': '%s — %s | CAAMBIOCWB' % (p['name'], p['category']),
            'descricao': descricao,
            'pagina': 'produto',
            'og_titulo': '%s — %s' % (p['name'], p['category']),
            'og_descricao': descricao,
            'og_tipo': 'product',
            'og_imagem': ORIGEM + caminho_foto(p, p.get('cover', 1)),
            'og_imagem_alt': p['name'] + ' para câmbio ' + p['category'],
            'og_imagem_tipo': 'image/avif',
            'og_imagem_largura': '900',
            'og_imagem_altura': '900',
            'noindex': False,
        }
        ld = json.dumps({
            '@context': 'https://schema.org',
            '@graph': [
                {'@type': 'Product', 'name': p['name'], 'description': descricao,
                 'sku': p['id'].upper(), 'category': p['category'], 'url': canonical,
                 'image': fotos, 'itemCondition': 'https://schema.org/UsedCondition'},
                {'@type': 'BreadcrumbList', 'itemListElement': [
                    {'@type': 'ListItem', 'position': 1, 'name': 'Início', 'item': ORIGEM + '/'},
                    {'@type': 'ListItem', 'position': 2, 'name': 'Catálogo', 'item': ORIGEM + '/loja/'},
                    {'@type': 'ListItem', 'position': 3, 'name': p['category'],
                     'item': ORIGEM + url_categoria(p['category'])},
                    {'@type': 'ListItem', 'position': 4, 'name': p['name'], 'item': canonical},
                ]},
            ]}, ensure_ascii=False, indent=2)
        escrever('peca/%s/index.html' % p['id'],
                 montar(meta, conteudo_peca(p, produtos), canonical, [ld], scripts_de('peca')))
    print('  peca/<id>/index.html   %d páginas' % len(produtos))


def gerar_sitemap(produtos):
    urls = [(ORIGEM + '/', '1.0', 'monthly'),
            (ORIGEM + '/loja/', '0.9', 'weekly'),
            (ORIGEM + '/sobre/', '0.6', 'yearly'),
            (ORIGEM + '/contato/', '0.7', 'yearly')]
    linhas = []
    for loc, prio, freq in urls:
        linhas.append('  <url>\n    <loc>%s</loc>\n    <lastmod>%s</lastmod>\n'
                      '    <changefreq>%s</changefreq>\n    <priority>%s</priority>\n  </url>'
                      % (loc, HOJE, freq, prio))
    for p in produtos:
        imagem = ORIGEM + caminho_foto(p, p.get('cover', 1))
        linhas.append('  <url>\n    <loc>%s</loc>\n    <lastmod>%s</lastmod>\n'
                      '    <changefreq>monthly</changefreq>\n    <priority>0.5</priority>\n'
                      '    <image:image>\n      <image:loc>%s</image:loc>\n'
                      '      <image:title>%s</image:title>\n    </image:image>\n  </url>'
                      % (ORIGEM + url_peca(p['id']), HOJE, imagem,
                         esc(p['name'] + ' — ' + p['category'])))
    escrever('sitemap.xml',
             '<?xml version="1.0" encoding="UTF-8"?>\n'
             '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n'
             '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n'
             + '\n'.join(linhas) + '\n</urlset>\n')
    print('  sitemap.xml            %d URLs' % (len(urls) + len(produtos)))


def gerar_manifest():
    escrever('site.webmanifest', json.dumps({
        'name': 'CAAMBIOCWB — Peças para transmissão automática',
        'short_name': 'CAAMBIOCWB',
        'description': 'Catálogo de peças para transmissão automática. Curitiba — PR.',
        'start_url': '/',
        'display': 'minimal-ui',
        'background_color': '#ffffff',
        'theme_color': '#0c0c0c',
        'lang': 'pt-BR',
        'icons': [
            {'src': '/favicon.svg', 'sizes': 'any', 'type': 'image/svg+xml'},
            {'src': '/apple-touch-icon.png', 'sizes': '180x180', 'type': 'image/png'},
        ],
    }, ensure_ascii=False, indent=2) + '\n')
    print('  site.webmanifest')


if __name__ == '__main__':
    categorias, produtos = carregar_catalogo()
    if len(produtos) != len(set(p['id'] for p in produtos)):
        raise SystemExit('há id repetido em products.js')
    fora = sorted({p['category'] for p in produtos} - set(categorias))
    if fora:
        raise SystemExit('categoria de produto fora de CATEGORIES: %s' % fora)

    print('catálogo: %d peças, %d transmissões' % (len(produtos), len(categorias)))
    gerar_paginas_fixas()
    gerar_pecas(produtos)
    gerar_sitemap(produtos)
    gerar_manifest()
    print('pronto.')
