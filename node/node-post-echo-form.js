import LogRocket from 'logrocket';
LogRocket.init('sv4fi3/annekelleysite');

import express from 'express';
const app = express(); // new Express application

app.get('/node/node-post-echo-form.js', (request, response) => { // called when a get received at the url
    response.set("Cache-Control", "no-cache");
    response.send("<!doctype html>"
        + "<head>"
        + "<script src=\"https://cdn.lgrckt-in.com/LogRocket.min.js\" crossorigin=\"anonymous\"></script>"
        + "<script>window.LogRocket && window.LogRocket.init('sv4fi3/annekelleysite');</script>"
        + "<title>Basic Form</title></head>"
        + "<body><h1 align=center>Enter details to test our GET echoing!</h1>"
        + "<form action=\"node-post-echo.js\" method=\"post\">Username: <input type=\"text\" name=\"username\"><br>"
        + "Password: <input type=\"password\" name=\"password\"><br>"
        + "<input type = \"submit\" value = \"Send\"><br>"
        + "</form></body></html>");
});

app.listen(3005, () => {
    console.log('Server running on port 3005');
});