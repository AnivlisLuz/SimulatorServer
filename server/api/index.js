const randtoken = require('rand-token');
const db = require("./database")

var mercados = {}

exports.setApi = app => {
    app.get('/api', (req, client) => {
        console.log(req.query)
        db.getAllBimestre((res, error) => {
            if (error) {
                client.status(400).send(error)
            } else {
                client.json(res)
            }
        })
    })
    app.get('/api/ventas', (req, client) => {
        console.log(req.query)
        let query = req.query
        if (query && query.valor) {
            db.insertVentas(query.valor, (res, error) => {
                console.log(error, res)
                if (error) {
                    client.send(error)
                } else {
                    client.json(res)
                }
            })
        } else {
            client.send("errorF")
        }
    })
    app.get('/api/version', (req, client) => {
        client.send("v 1.0")
    })
    app.get('/produccion/*', (req, client) => {
        console.log("produccion " + req.query)
        client.send("produccion")
    })
    app.post('/empresa/*', (req, client) => {
        console.log("empre", req.body, req.body.nombre)
        algunag(req.body.nombre)
        client.send("hola")
    })
    app.post('/bimestre', (req, client) => {
        console.log("inversion en marqkerin =>" + req.body)
        client.send("bimestre ")
    })
    app.post('/createGame', (req, client) => {
        let body = req.body
        console.log("createGame =>", req.body)
        let token = randtoken.generate(5);
        mercados[token] = new Mercado(body.nombreMercado, body.cantidadJugadores, token)
        client.json({ message: "ok", token: token })

    })
    app.post('/joinGame', (req, client) => {
        let body = req.body
        console.log("joinGame =>", req.body)
        let _mercado = mercados[body.codigo]
        if (_mercado && !_mercado.isFull()) {
            _mercado.addPlayer(body.player_name)
            client.json({ message: "ok" })
        } else {
            client.json({ message: "error con el mercado" })
        }
    })
}
function algunag(nombre) {
    console.log(nombre + " otro nombre")
    return true
}
class Mercado {

    constructor(nombre, cantidad_judagores, token) {
        this.nombre = nombre
        this.cantidad_judagores = cantidad_judagores
        this.token = token
        this.players = []
    }
    addPlayer(name) {
        this.players.push(name)
    }
    isFull() {
        return this.players.length >= this.cantidad_judagores
    }
}
exports.setSocket = io => {
    io.on('connection', (socket) => {
        console.log('user connected'); load_mercados(socket)
        socket.on('createGame', (data, client) => {
            console.log("createGame =>", data)
            let token = randtoken.generate(5);
            mercados[token] = new Mercado(data.nombreMercado, data.cantidadJugadores, token)
            load_mercados(socket)
            client({ token: token, message: "ok" })
        })
        socket.on('joinGame', (data, client) => {
            console.log("socket joinGame =>", data)
            let _mercado = mercados[data.codigo]
            if (_mercado && !_mercado.isFull()) {
                _mercado.addPlayer(data.player_name)
                client({ message: "ok" })
            } else {
                console.log("error con el mercado")
                client("error con el mercado")
            }
        })
        socket.on('visionGeneral', (data, client) => {
            console.log("socket joinGame =>", data)
            let _mercado = mercados[data.codigo]
            if (_mercado) {
                client({ message: "ok", players: _mercado.players })
            } else {
                console.log("error con el visionGeneral")
                client("error con el visionGeneral")
            }
        })
    });


}
function load_mercados(socket) {
    socket.emit("load_mercados", mercados)
}
function update_players(socket, _mercado) {
    console.log("update_players")
    socket.emit("update_players", _mercado.players)
}