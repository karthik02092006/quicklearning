/**
 * Quick Learn - Lightweight Localhost Development Server
 * Zero dependencies - works with pure Node.js!
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const PORT = 5500;
const ROOT_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf'
};

const server = http.createServer((req, res) => {
  // Normalize request URL
  let reqPath = decodeURI(req.url.split('?')[0]);
  if (reqPath === '/' || reqPath === '') {
    reqPath = '/login.html'; // Default to login page as configured
  }

  let filePath = path.join(ROOT_DIR, reqPath);

  // Security check: ensure path is inside ROOT_DIR
  if (!filePath.startsWith(ROOT_DIR)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('403 Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // If path doesn't exist, try appending .html
      if (fs.existsSync(filePath + '.html')) {
        filePath += '.html';
      } else {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(`<h2>404 Not Found</h2><p>File not found: ${reqPath}</p><a href="/login.html">Back to Login</a>`);
        return;
      }
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(filePath, (readErr, content) => {
      if (readErr) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 Server Error: ' + readErr.message);
        return;
      }

      res.writeHead(200, {
        'Content-Type': contentType,
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      });
      res.end(content);
    });
  });
});

server.listen(PORT, () => {
  const url = `http://localhost:${PORT}/login.html`;
  console.log('\n==================================================');
  console.log('⚡  Quick Learn Localhost Server is Running!');
  console.log('==================================================');
  console.log(`📡 Local URL:   ${url}`);
  console.log(`🌐 Port:        ${PORT}`);
  console.log(`📁 Directory:   ${ROOT_DIR}`);
  console.log('--------------------------------------------------');
  console.log('👉 Press Ctrl + C in this terminal to stop server.\n');

  // Automatically open browser on Windows
  const openCmd = process.platform === 'win32' ? `start ${url}` : `open ${url}`;
  exec(openCmd, (err) => {
    if (err) {
      console.log(`Please open ${url} in your browser.`);
    }
  });
});
