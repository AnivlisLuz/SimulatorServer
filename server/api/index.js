const randtoken = require('rand-token');
const db = require("./database")

var mercados = {}

function algunag(nombre) {
    console.log(nombre + " otro nombre")
    return true
}
exports.setSocket = io => {
    io.on('connection', (socket) => {
        console.log('user connected'); 
        socket.on('createGame', (data, client) => {
            console.log("createGame =>", data)
            let token = randtoken.generate(5);
            mercados[token] = new Mercado(data.nombreMercado, data.cantidadJugadores, token)            
            client({ token: token, message: "ok" })
        })
        socket.on('joinGame', (data, client) => {
            console.log("socket joinGame =>", data)
            let _mercado = mercados[data.codigo]
            if (_mercado) {
                client(_mercado.addPlayer(data.player_name, socket))
                io.sockets.emit("get_players", _mercado.getPlayers())
            } else {
                client("error con el codigo")
            }

        })
        socket.on('get_players', (data) => {
            console.log("get_players =>", data)
            let _mercado = mercados[data.codigo]
            if (_mercado) {
                io.sockets.emit("get_players", _mercado.getPlayers())
            }

        })

    });
}

class Mercado {

    constructor(nombre, cantidad_judagores, token) {
        this.nombre = nombre
        this.cantidad_judagores = cantidad_judagores
        this.token = token
        this.players = {}
    }
    addPlayer(name, socket) {
        let player_tmp = this.players[name]
        if (player_tmp) {
            player_tmp.update_socket(socket)
            return { message: "ok" }
        } else if (!this.isFull()) {
            this.players[name] = new Player(name, socket)
            return { message: "ok" }
        } else {
            return "ya esta lleno"
        }

    }
    isFull() {
        return this.players.length >= this.cantidad_judagores
    }
    getPlayers() {
        let res = []    
        for (let player in this.players) {
            res.push(player)
        }
        return res
    }
}
class Player {
    constructor(socket, name) {
        this.update_socket(socket)
        this.name = name
    }
    update_socket(socket) {
        this.socket = socket
    }
    toString() { return this.name }
}