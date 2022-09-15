const http = require("http");

const host = '127.0.0.1';
const port = process.env.HTTP_PORT || 8000;
const serviceName = process.env.NAME || 'default';

http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(`{"message": "Response from ${serviceName}"}`);
}).listen(port, () =>
    console.log(`Server ${serviceName} is running on http://${host}:${port}`));