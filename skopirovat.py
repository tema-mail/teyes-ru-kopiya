"""Копия страниц teyes.ru/<p>/ со всеми ресурсами в ~/Documents/teyes-ru-kopiya/<p>/ (локальные пути)."""
import re, sys, pathlib, urllib.request, urllib.parse, concurrent.futures as cf
OUT = pathlib.Path.home() / 'Documents/teyes-ru-kopiya'
UA = {'User-Agent': 'Mozilla/5.0 (Macintosh) AppleWebKit/537.36 Chrome/130 Safari/537.36'}
EXT = r'(?:png|jpe?g|webp|svg|gif|ico|mp4|webm|css|js|json|woff2?|ttf|TTF|otf)'
RX = re.compile(r'https?://[A-Za-z0-9.\-]+/[^\s\'"`()<>]*?\.' + EXT + r'(?:\?[^\s\'"`()<>]*)?(?=[\s\'"`()<>]|$)')
SKIP = ('googletagmanager', 'google-analytics', 'mc.yandex')
got = {}

def fetch(url):
    import subprocess
    r = subprocess.run(['curl', '-sfL', '--max-time', '500', '--retry', '3', '-A', UA['User-Agent'], url], capture_output=True)
    if r.returncode:
        raise RuntimeError(f'curl {r.returncode}')
    return r.stdout

def local(url):
    u = urllib.parse.urlsplit(url)
    return pathlib.Path('assets') / u.netloc / urllib.parse.unquote(u.path.lstrip('/'))

def grab(url):
    if url in got or any(s in url for s in SKIP):
        return
    dst = OUT / '_shared' / local(url)
    got[url] = dst
    if dst.exists():
        return
    try:
        b = fetch(url)
        dst.parent.mkdir(parents=True, exist_ok=True)
        dst.write_bytes(b)
    except Exception as e:
        print('ошибка', url, e)
        got[url] = None

def rewrite(text, depth):
    pre = '../' * depth + '_shared/'
    def sub(m):
        u = m.group(0)
        if any(s in u for s in SKIP) or got.get(u) is None:
            return u
        return pre + str(local(u))
    return RX.sub(sub, text)

pages = sys.argv[1:]
texts = {}
for p in pages:
    base = f'https://teyes.ru/{p}/'
    d = OUT / p
    d.mkdir(parents=True, exist_ok=True)
    html = fetch(base).decode('utf-8', 'ignore')
    texts[(p, 'index.html')] = html
    for rel in re.findall(r'(?:src|href)="([A-Za-z0-9_.\-]+\.(?:css|js)(?:\?[^"]*)?)"', html):
        name = rel.split('?')[0]
        try:
            texts[(p, name)] = fetch(base + rel).decode('utf-8', 'ignore')
        except Exception as e:
            print('ошибка', base + rel, e)
# ресурсы: несколько проходов, css/js тянут свои ссылки
todo = set()
for t in texts.values():
    todo |= set(RX.findall(t))
for _ in range(3):
    new = [u for u in todo if u not in got]
    if not new:
        break
    with cf.ThreadPoolExecutor(16) as ex:
        list(ex.map(grab, new))
    todo = set()
    for u, dst in list(got.items()):
        if dst and dst.suffix.lower() in ('.css', '.js', '.json'):
            todo |= set(RX.findall(dst.read_text('utf-8', 'ignore')))
# переписать ссылки в общих css/js
for u, dst in got.items():
    if dst and dst.suffix.lower() in ('.css', '.js', '.json'):
        dst.write_text(rewrite(dst.read_text('utf-8', 'ignore'), dst.relative_to(OUT).parent.parts.__len__()), 'utf-8')
for (p, name), t in texts.items():
    t = rewrite(t, 1)
    if name == 'index.html':
        t = re.sub(r'<script[^>]*googletagmanager[^>]*></script>', '', t)
    (OUT / p / name).write_text(t, 'utf-8')
print('ресурсов', sum(1 for v in got.values() if v), 'ошибок', sum(1 for v in got.values() if v is None))
