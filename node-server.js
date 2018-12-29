const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
    if (req.url === '/' || req.url === '/catalog.html') {
        fs.readFile('./public/catalog.html', function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    } else if (req.url === '/some') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write("Some page");
        res.end();
    } else {
        fs.readFile('./public/404.html', function (err, data) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    }
});

server.listen(3000);
console.log("Server is run in port 3000");