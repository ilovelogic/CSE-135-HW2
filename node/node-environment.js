const express = require('express');
const app = express(); // 

app.get('/node/node-environment.js', (request, response) => {
    let headers_str = "";
    let server_vars_str = "";
    for (const key in request.headers) {
        headers_str += `<li>${key}: ${request.headers[key]}</li>`;
    }
    for (const key in process.env) {
        server_vars_str += `<li>${key}: ${process.env[key]}</li>`;
    }
    response.set("Cache-Control: no-cache");
    response.send("<!doctype html>"
        + "<head><title>Environment Variables</title></head>"
        + "<body><h1 align=center>Environment Variables</h1>"
        + "<h2>HTTP Request Headers</h2>"
        + `<ul>${headers_str}</ul>`
        + "<h2>Server Variables</h2>"
        + `<ul>${server_vars_str}</ul>`
        + "</body></html>");
});

app.listen(3002, () => {
    console.log('Server running on port 3002');}
);