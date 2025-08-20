import LogRocket from 'logrocket';
LogRocket.init('sv4fi3/annekelleysite');

import express from 'express'; // importing Express module
const app = express(); // new Express application

app.get('/node/node-hello-html-world.js', (request, response) => { // called when a get received at the url
    response.set("Cache-Control", "no-cache");
    response.send("<!doctype html>"
        + "<head>"
        + "<script src=\"https://cdn.lgrckt-in.com/LogRocket.min.js\" crossorigin=\"anonymous\"></script>"
        + "<script>window.LogRocket && window.LogRocket.init('sv4fi3/annekelleysite');</script>"
        + "<title>Hello HTML World</title></head>"
        + "<body><h1 align=center>Hello HTML World!</h1></body>"
        + "</html>");
});

app.listen(3000, () => {
    console.log('Server running on port 3000');}); // gets server up and listening on post 3000