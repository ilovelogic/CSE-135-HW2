const express = require('express');
const app = express(); // 

app.get('/node/node-environment.js', (request, response) => {
    let headers_str = "";
    let env_vars_str = "";
    for (const key in request.headers) {
        headers_str += `<li>${key}: ${request.headers[key]}</li>`;
    }

    // firefox detection
    const maybe_firefox = request.headers['user-agent'] || "";
    const uses_firefox = maybe_firefox.toLowerCase().includes('firefox');
    const firefox_mssg = uses_firefox ? "<h3><strong>Uses Firefox</strong></h3>" : "<h3><strong>No Firefox</strong></h3>";
    for (const key in process.env) {
        env_vars_str += `<li>${key}: ${process.env[key]}</li>`;
    }
    response.set("Cache-Control", "no-cache");
    response.send("<!doctype html>"
        + "<head><title>Environment Variables</title></head>"
        + "<body><h1 align=center>Environment Variables</h1>"
        + "<h2>HTTP Request Headers</h2>"
        + `<ul>${headers_str}</ul>`
        + `${firefox_mssg}<br>`
        + "<h2>Environment Variables</h2>"
        + `<ul>${env_vars_str}</ul>`
        + "</body></html>");
});

app.listen(3002, () => {
    console.log('Server running on port 3002');}
);