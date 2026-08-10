"""Servidor estático do site.

Serve as páginas para desenvolvimento local, e também dá conta de ficar
atrás de um proxy ou túnel em produção. Escuta só em 127.0.0.1: nada é
exposto na rede sem alguém colocar um proxy na frente.

Não publica o que está na pasta mas não é o site — histórico do git,
fotos originais, ferramentas — e não lista diretório.

Uso:
    python ferramentas/servidor.py [porta]     (padrão: 8000)
"""
import mimetypes
import os
import socket
import posixpath
import sys
import urllib.parse
from http import HTTPStatus
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PORTA = int(sys.argv[1]) if len(sys.argv) > 1 else 8000

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

    # HTTP/1.1 mantém a conexão aberta, o que é bom para uma página que
    # pede dezenas de imagens. Mas sem timeout a thread daquela conexão
    # fica presa esperando um próximo pedido que talvez nunca venha, e
    # elas se acumulam: depois de algumas horas de pé o servidor passava
    # de 6 ms para 200 ms de mediana, com picos de segundos.
    protocol_version = 'HTTP/1.1'
    timeout = 5

    # sem isso o TCP segura pacotes pequenos esperando encher o buffer,
    # o que atrasa cabeçalho e arquivos curtos
    disable_nagle_algorithm = True

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

    def log_error(self, formato, *args):
        """Conexão ociosa fechando no timeout é o funcionamento normal do
        keep-alive, não erro — sem isso o log enche de 'Request timed out'."""
        mensagem = formato % args
        if 'timed out' in mensagem or 'Connection reset' in mensagem:
            return
        self.log_message(formato, *args)

    def handle_one_request(self):
        try:
            super().handle_one_request()
        except (TimeoutError, socket.timeout,
                ConnectionResetError, ConnectionAbortedError, BrokenPipeError):
            self.close_connection = True


class Servidor(ThreadingHTTPServer):
    daemon_threads = True
    # a fila do accept: sem isso o padrão é 5 e uma página que dispara
    # vinte imagens de uma vez começa a levar recusa
    request_queue_size = 64


if __name__ == '__main__':
    servidor = Servidor(('127.0.0.1', PORTA), Handler)
    print('servindo %s em http://127.0.0.1:%d' % (RAIZ, PORTA), flush=True)
    try:
        servidor.serve_forever()
    except KeyboardInterrupt:
        print('encerrado', flush=True)
