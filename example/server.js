'use strict';

const http = require('http');

const fs = require('fs');

const server  = http.createServer(function (request, response) {
    console.log(request.method, request.url);
    if (request.url == '/Style.css') {
        const css =  fs.readFileSync('Style.css','utf8');
        response.end(css);
    } else {
        const html = fs.readFileSync('index.html','utf8');
        response.end(html);
    }
});

server.listen(process.env.PORT || 8080);
console.log('Server started!');