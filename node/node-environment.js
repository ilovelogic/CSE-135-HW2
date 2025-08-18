const express = require('express');
const app = express();

app.get('/node/node-environment.js', (request, response) => {
    let env_var_str = "";
    for (const key in request.headers) {
        env_var_str += `<li>${key}: ${request.headers[key]}</li>`;
    }
    response.set("Cache-Control: no-cache");
    response.send("<!doctype html>"
        + "<head><title>Environment Variables</title></head>"
        + "<body><h1 align=center>Environment Variables</h1>"
        + "<h2>HTTP Request Headers</h2>"
        + `<ul>${env_var_str}</ul>`
        + "</body></html>");
});

app.listen(3000, () => {
    console.log('Server running on port 3000');); // gets server up and listening on post 3000
};