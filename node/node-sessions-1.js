const express = require('express');
const session = require('express-session');
const {create_client} = require('redis'); // for connecting client to redis server
const redis_storage = require('connect-redis').default();

const app = express();

let redis_client = create_client();

redis_client.connect().catch(console.error); // will print errors if encountered

app.use(session({
    store: new redis_storage({client: redis_client}),
    secret: "b2k3*23H^4r3Dewvs5Hvks3452",
    resave: false,
    saveUninitialized: false,
    store: mongo_storage.create(),
    cookie: {path: '/node/', secure: true}
}));

app.post('/node/node-sessions-1.js', (request, response) => {
    request.session.username = request.session.username || request.body.username;
    request.session.order = request.session.order || request.body.order;
    response.set("Cache-Control", "no-cache");
    response.send("<!doctype html>"
        + "<head><title>Node Sessions Page 1</title></head>"
        + "<body><h1 align=center>Node Sessions Page 1</h1>"
        + "Hello " + request.session.username  + ", "
        + "we here at Evilbucks know that you like ordering "
        + request.session.order + ". "
        + "(cue scary music)"
        + "</body></html>");
});

app.listen(3008, () => {
    console.log("Server listening on port 3008");
});
