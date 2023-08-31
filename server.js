const http = require('http');
const url = require("url");

const hostname = '127.0.0.1';
const port = 3000;

const serverRouter = (req, res) => {

    const reqUrl = url.parse(req.url).pathname

    if(reqUrl == "/") {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<html><body><b>Hola Mundo</b></body></html>');
    }

    else if(reqUrl == "/plain") {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('<html><body><b>Hola Mundo</b></body></html>');
    }

}

const server = http.createServer(serverRouter);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
