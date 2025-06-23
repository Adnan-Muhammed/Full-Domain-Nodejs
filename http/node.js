const http = require('http');

const server = http.createServer((req, res) => {
  // Set route
  const { method, url } = req;

  if (url === '/' && method === 'GET') {
    // Simulate res.send()
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to Home Page');
  }

  else if (url === '/about' && method === 'GET') {
    // Simulate res.json()
    const data = { app: 'Node Server', version: '1.0.0' };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
  }

  else if (url === '/notfound') {
    // Simulate res.status(404).send()
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }

  else {
    // Default route
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end('Bad Request');
  }
});

// Listen on port 3000
server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
