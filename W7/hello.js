console.log("Hello world")

/* COPIED AND ADAPTED FROM https://nodejs.org/en/learn/getting-started/introduction-to-nodejs*/

const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 9797;

const server = createServer((req, res) => {
  res.statusCode = 200;  // changing this changes the returned http code
  res.setHeader('Content-Type', 'text/plain');  // header type and body
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});