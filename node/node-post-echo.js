import LogRocket from 'logrocket';
LogRocket.init('sv4fi3/annekelleysite');

import express from 'express'; // importing Express module

const app = express(); // new Express application

app.use(express.urlencoded({extended: true}));

app.post('/node/node-post-echo.js', (request, response) => { // called when a get received at the url
    response.set("Cache-Control", "no-cache");
    response.send("<!doctype html>"
        + "<head>"
        + "<script src=\"https://cdn.lgrckt-in.com/LogRocket.min.js\" crossorigin=\"anonymous\"></script>"
        + "<script>window.LogRocket && window.LogRocket.init('sv4fi3/annekelleysite');</script>"
        + "<title>Post Echo</title></head>"
        + "<body><h1 align=center>Hello " + request.body.username + "</h1>"
        + "Your password is " + request.body.password
        + "</body></html>");
});

app.listen(3006, () => {
    console.log('Server running on port 3006');});