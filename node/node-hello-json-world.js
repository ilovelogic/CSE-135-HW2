const express = require('express'); // importing Express module
const requestIp = require('request-ip') // for getting ipaddress of client
const app = express(); // new Express application

app.use(requestIp.mw());

app.get('/node/node-hello-json-world.js', (request, response) => { // called when a get received at the url
    const clientIp = request.clientIp;
    response.set("Cache-Control: no-cache");
    response.json({message: "Hello World from NodeJS!", date: `Today's date is ${date}`, ipaddress : clientIp});
});

app.listen(3000, () => {
    console.log('Server running on port 3000');}); // gets listening on post 3000