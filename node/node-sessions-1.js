import express from 'express'; // using this style now, because
import  session from 'express-session'; // apparently I have connect-redis@9.0.0 as my download
import {createClient} from 'redis';
import {RedisStore} from 'connect-redis';


const app = express();

const redisClient = createClient();

await redisClient.connect();

app.use(session({
    store: new RedisStore({client: redisClient}),
    secret: "b2k3*23H^4r3Dewvs5Hvks3452",
    resave: false,
    saveUninitialized: false,
    cookie: {path: '/node/', secure: false}
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
