"""Servidor estático do site, para publicar via túnel cloudflared.

Escuta só em 127.0.0.1 — quem fala com ele é o cloudflared, que roda na
mesma máquina. Nada fica exposto na rede local.

Uso:
    python ferramentas/servidor.py [porta]

Em produção nesta máquina quem chama é a tarefa agendada
"CaambiocwbLBWMA", pelo wrapper C:\\Users\\Leonardo\\.cloudflared\\caambiocwb-run.cmd
"""
import mimetypes
import os
import posixpath
import sys
import urllib.parse
from http import HTTPStatus
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PORTA = int(sys.argv[1]) if len(sys.argv) > 1 else 8767

# Pastas que existem no repositório mas não fazem parte do site publicado:
# histórico do git, os 216 MB de fotos originais, o material de origem do
# site antigo e as ferramentas de manutenção.
BLOQUEADAS = {'.git', '.claude', 'fotos-originais', 'referencia', 'ferramentas'}

# O Windows não registra estes tipos, e sem eles o navegador não exibe.
mimetypes.add_type('image/avif', '.avif')
mimetypes.add_type('image/svg+xml', '.svg')
mimetypes.add_type('image/webp', '.webp')
mimetypes.add_type('text/css', '.css')
mimetypes.add_type('application/javascript', '.js')

CACHE_LONGO = ('/assets/',)


class Handler(SimpleHTTPRequestHandler):
    server_version = 'caambiocwb'
    sys_version = ''
    protocol_version = 'HTTP/1.1'

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=RAIZ, **kwargs)

    def caminho_bloqueado(self):
        caminho = urllib.parse.urlsplit(self.path).path
        partes = [p for p in posixpath.normpath(caminho).split('/') if p and p != '.']
        return any(p.lower() in BLOQUEADAS or p.startswith('.') for p in partes)

    def send_head(self):
        if self.caminho_bloqueado():
            return self.pagina_404()

        destino = self.translate_path(self.path)
        if os.path.isdir(destino) and not os.path.exists(os.path.join(destino, 'index.html')):
            return self.pagina_404()          # nada de listagem de diretório
        if not os.path.isdir(destino) and not os.path.exists(destino):
            return self.pagina_404()

        return super().send_head()

    def pagina_404(self):
        arquivo = os.path.join(RAIZ, '404.html')
        try:
            corpo = open(arquivo, 'rb').read()
        except OSError:
            corpo = b'<h1>404</h1>'
        self.send_response(HTTPStatus.NOT_FOUND)
        self.send_header('Content-Type', 'text/html; charset=utf-8')
        self.send_header('Content-Length', str(len(corpo)))
        self.end_headers()
        if self.command == 'HEAD':
            return None
        self.wfile.write(corpo)
        return None

    def end_headers(self):
        self.send_header('X-Content-Type-Options', 'nosniff')
        self.send_header('Referrer-Policy', 'strict-origin-when-cross-origin')
        caminho = urllib.parse.urlsplit(self.path).path
        if caminho.startswith(CACHE_LONGO):
            self.send_header('Cache-Control', 'public, max-age=604800, immutable')
        else:
            self.send_header('Cache-Control', 'no-cache')
        super().end_headers()

    def log_request(self, code='-', size='-'):
        """Só registra o que deu errado. Uma visita ao catálogo pede
        dezenas de imagens; logar tudo faria o arquivo crescer à toa."""
        try:
            codigo = int(code)
        except (TypeError, ValueError):
            codigo = 0
        if codigo >= 400:
            self.log_message('%s %s -> %s', self.command, self.path, code)

    def log_message(self, formato, *args):
        sys.stdout.write('%s %s\n' % (self.log_date_time_string(), formato % args))
        sys.stdout.flush()


if __name__ == '__main__':
    servidor = ThreadingHTTPServer(('127.0.0.1', PORTA), Handler)
    servidor.daemon_threads = True
    print('servindo %s em http://127.0.0.1:%d' % (RAIZ, PORTA), flush=True)
    try:
        servidor.serve_forever()
    except KeyboardInterrupt:
        print('encerrado', flush=True)
