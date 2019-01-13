const randtoken = require('rand-token');
const db = require("./database")

var mercados = {}
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
                client(_mercado.addPlayer(data.player_name))
                io.sockets.emit("getPlayers", _mercado.getPlayers())
            } else {
                client("error con el codigo")
            }
        })
        socket.on('addBimestreUno', (data, client) => {
            console.log("addBimestreUno joinGame =>", data)
            let _mercado = mercados[data.codigo]
            if (_mercado) {
                client(_mercado.addBimestreUno(data))
                io.sockets.emit("getPlayers", _mercado.getPlayers())
            } else {
                client("error con el codigo")
            }
        })
        socket.on('addBimestreDos', (data, client) => {
            console.log("addBimestreDos joinGame =>", data)
            let _mercado = mercados[data.codigo]
            if (_mercado) {
                client(_mercado.addBimestreDos(data))
                io.sockets.emit("getPlayers", _mercado.getPlayers())
            } else {
                client("error con el codigo")
            }
        })
        socket.on('addBimestreTres', (data, client) => {
            console.log("addBimestreTres joinGame =>", data)
            let _mercado = mercados[data.codigo]
            if (_mercado) {
                client(_mercado.addBimestreTres(data))
                io.sockets.emit("getPlayers", _mercado.getPlayers())
            } else {
                client("error con el codigo")
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
    addPlayer(name) {
        let player_tmp = this.players[name]
        if (player_tmp) {
            return { message: "ok" }
        } else if (!this.isFull()) {
            this.players[name] = new Player(name)
            return { message: "ok" }
        } else {
            return "ya esta lleno"
        }
    }
    addBimestreUno(data) {
        let player_tmp = this.players[data.player_name]
        if (player_tmp) {
            player_tmp.addBimestreUno(data.data)
            return { message: "ok" }
        } else {
            return "no hay player uno"
        }
    }
    addBimestreDos(data) {
        let player_tmp = this.players[data.player_name]
        if (player_tmp) {
            player_tmp.addBimestreDos(data.data)
            return { message: "ok" }
        } else {
            return "no hay player uno"
        }
    }
    addBimestreTres(data) {
        let player_tmp = this.players[data.player_name]
        if (player_tmp) {
            player_tmp.addBimestreTres(data.data)
            return { message: "ok" }
        } else {
            return "no hay player uno"
        }
    }
    isFull() {
        return Object.keys(this.players).length >= this.cantidad_judagores
    }
    getPlayers() {
        let res = []
        for (let player in this.players) {
            res.push(this.players[player].toString())
        }
        return { size: this.cantidad_judagores, players: res }
    }
}

mercados["a"] = new Mercado("nombre mercardo", 2, "a")
class Player {
    constructor(name) {
        this.name = name
        this.bimestre_inicial = new Bimestre(150, 500, 3000, 1500, 300)
    }
    addBimestreUno(data) {
        this.bimestre_uno = new Bimestre(
            data.precioUnitario,
            data.produccion,
            data.inversionEnMarketing,
            data.inversionEnInvestigacion,
            data.inversionEnActivos)
    }
    addBimestreDos(data) {
        this.bimestre_dos = new Bimestre(
            data.precioUnitario,
            data.produccion,
            data.inversionEnMarketing,
            data.inversionEnInvestigacion,
            data.inversionEnActivos)
    }
    addBimestreTres(data) {
        this.bimestre_tres = new Bimestre(
            data.precioUnitario,
            data.produccion,
            data.inversionEnMarketing,
            data.inversionEnInvestigacion,
            data.inversionEnActivos)
    }
    toString() {
        let res = {}
        res.name = this.name
        res.bimestre_inicial = this.bimestre_inicial.toString()
        if (this.bimestre_uno) res.bimestre_uno = this.bimestre_uno.toString()
        if (this.bimestre_dos) res.bimestre_dos = this.bimestre_dos.toString()
        if (this.bimestre_tres) res.bimestre_tres = this.bimestre_tres.toString()
        return res
    }
}
class Bimestre {
    constructor(precioUnitario, produccion, inversionEnMarketing, inversionEnInvestigacion, inversionEnActivos) {
        this.precioUnitario = precioUnitario
        this.produccion = produccion
        this.inversionEnMarketing = inversionEnMarketing
        this.inversionEnInvestigacion = inversionEnInvestigacion
        this.inversionEnActivos = inversionEnActivos
    }
    toString() {
        return {
            precioUnitario: this.precioUnitario,
            produccion: this.produccion,
            inversionEnMarketing: this.inversionEnMarketing,
            inversionEnInvestigacion: this.inversionEnInvestigacion,
            inversionEnActivos: this.inversionEnActivos
        }
    }
}
