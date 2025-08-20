import { body } from 'express-validator';

import express from 'express'; // importing Express module

const app = express(); // new Express application

app.use(express.urlencoded({extended: true}));

app.post('/node/node-post-echo.js', [body('username').trim().escape()], (request, response) => { // called when a get received at the url
    response.set("Cache-Control", "no-cache");
    response.send("<!doctype html>"
        + "<head><title>Post Echo</title></head>"
        + "<body><h1 align=center>Hello " + request.body.username + "</h1>"
        + "</body></html>");
});

app.listen(3006, () => {
    console.log('Server running on port 3006');});