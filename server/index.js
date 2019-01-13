const express = require('express');
const app = express();
const server = require('http').Server(app);
const cors = require('cors')
const port = 8080
const api = require('./api')
const io = require('socket.io')(server);

app.use(express.json())
app.use(cors())
app.use('/', express.static(__dirname + "/client/static"));

// api.setApi(app)
api.setSocket(io)

server.listen(port);
console.log(`server running at http://localhost:${port}`)
console.log(`api configurado at http://localhost:${port}/api`)
