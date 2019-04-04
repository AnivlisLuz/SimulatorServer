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

app.get('/*', (req, res, next) => {
    res.sendFile(__dirname+'/client/static/index.html');
  });


api.setSocket(io)
api.setApi(app)

server.listen(port);
console.log(`server running at http://localhost:${port}`)
console.log(`api configurado at http://localhost:${port}/api`)