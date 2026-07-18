import http from 'node:http';
import { sum } from './sum.js';

const port = Number(process.env.PORT ?? 3000);

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'application/json' });
  res.end(JSON.stringify({
    status: 'ok',
    message: 'GitHub Actions practice app',
    sample: sum(2, 3),
    commit: process.env.GITHUB_SHA ?? 'local'
  }));
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
});
