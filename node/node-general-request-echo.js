const { urlencoded } = require('body-parser');
const express = require('express'); // importing Express module
const app = express(); // new Express application

app.use(express.urlencoded({extended: true}));

app.all('/node/node-general-request-echo.js', (request, response) => { // for any request type
    response.set("Cache-Control", "no-cache");

    // in case the query string is null
    safe_query = request.query && typeof request.query == 'object' ? request.query : {};

    let query_str = "<ul>";
    for (const [key, value] in Object.entries(safe_query)) {
        query_str += "<li>" + key + ": " + value + "</li>";
    }
    query_str += "</ul>";

    // in case the message body is null
    safe_body = request.body && typeof request.body == 'object' ? request.body : {};

    let body_str = "<ul>";
    for (const [key, value] in Object.entries(safe_body)) {
        body_str += "<li>" + key + ": " + value + "</li>";
    }
    body_str += "</ul>";

    response.send("<!doctype html>"
        + "<head><title>General Request Echo</title></head>"
        + "<body><h1 align=center>General Request Echo</h1><hr/>"
        + "<p><strong>HTTP Protocol: </strong>" + request.protocol.toUpperCase() 
        + "/" + request.httpVersion + "</p>"
        + "<p><strong>HTTP Method: </strong>" + request.method.toUpperCase() + "</p>"
        + "<p><strong>Query String: </strong></p>"
        + query_str
        + "<p><strong>Message Body: </strong></p>"
        + body_str);  
});

app.listen(3007, () => {
    console.log('Server running on port 3007');});