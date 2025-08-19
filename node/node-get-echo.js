import LogRocket from 'logrocket';
LogRocket.init('sv4fi3/annekelleysite');

import express from 'express'; // importing Express module
const app = express(); // new Express application

app.get('/node/node-get-echo.js', (request, response) => { // called when a get received at the url
    response.set("Cache-Control", "no-cache");
    response.send("<!doctype html>"
        + "<head><title>Get Echo</title></head>"
        + "<body><h1 align=center>Hello " + request.query.username + "</h1>"
        + "Your password is " + request.query.password
        + "</body></html>");
});

app.listen(3004, () => {
    console.log('Server running on port 3004');});