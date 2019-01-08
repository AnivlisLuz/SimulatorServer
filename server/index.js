const express = require('express');
const app = express();
const server = require('http').Server(app);
const port = 8080
const api = require('./api')
app.use(express.json())
app.use('/', express.static(__dirname + "/client/static"));

api.setApi(app)


server.listen(port);
console.log(`server running at http://localhost:${port}`)
