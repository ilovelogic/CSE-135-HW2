const express = require('express'); // importing Express module
const app = express(); // new Express application

app.get('/node/node-hello-html-world.js', (request, response) => { // called when a get received at the url
    response.send("Cache-Control: no-cache");
    response.send("<!doctype html>");
    response.send("<head><title>Hello HTML World</title></head>");
    response.send("<body><h1 align=center>Hello HTML World!</h1></body>");
    response.send("</html>");
});

app.listen(3000); // gets server up and listening on post 300