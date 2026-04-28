// Render haven-business-plan.html to haven-business-plan.pdf via headless Chrome.
// Usage: npm run build:pdf

const fs = require('fs');
const http = require('http');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SOURCE = 'haven-business-plan.html';
const OUTPUT = path.join(ROOT, 'haven-business-plan.pdf');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
};

function startStaticServer() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      let pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
      if (pathname === '/') pathname = '/' + SOURCE;
      const filePath = path.join(ROOT, pathname);
      if (!filePath.startsWith(ROOT)) {
        res.writeHead(403); return res.end();
      }
      fs.readFile(filePath, (err, data) => {
        if (err) { res.writeHead(404); return res.end(`Not found: ${pathname}`); }
        res.writeHead(200, { 'Content-Type': MIME[path.extname(filePath)] || 'application/octet-stream' });
        res.end(data);
      });
    });
    server.listen(0, '127.0.0.1', () => resolve(server));
  });
}

async function main() {
  const puppeteer = require('puppeteer');
  const server = await startStaticServer();
  const port = server.address().port;
  const target = `http://127.0.0.1:${port}/${SOURCE}`;
  console.log(`Rendering ${target}`);

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  try {
    const page = await browser.newPage();
    await page.emulateMediaType('print');
    await page.goto(target, { waitUntil: ['load', 'networkidle0'], timeout: 60_000 });
    await page.evaluateHandle('document.fonts.ready');

    await page.pdf({
      path: OUTPUT,
      format: 'Letter',
      printBackground: true,
      preferCSSPageSize: false,
      margin: { top: '0.55in', bottom: '0.55in', left: '0.6in', right: '0.6in' },
    });
    const bytes = fs.statSync(OUTPUT).size;
    console.log(`Wrote ${path.relative(ROOT, OUTPUT)} (${(bytes / 1024).toFixed(1)} KB)`);
  } finally {
    await browser.close();
    server.close();
  }
}

main().catch((err) => { console.error(err); process.exit(1); });
