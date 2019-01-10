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
        let _mercado = mercados[body.nombreMercado]
        if (_mercado) {
            client.json({ message: "duplicate", token: _mercado.token })
        } else {
            let token = randtoken.generate(5);
            mercados[body.nombreMercado] = new Mercado(body.nombreMercado, body.cantidadJugadores, token)
            client.json({ message: "ok", token: token })
        }
    })
    app.post('/joinGame', (req, client) => {
        let body = req.body
        console.log("joinGame =>", req.body)
        let _mercado = mercados[body.nombreMercado]
        if (_mercado&&_mercado.token==body.codigo&&!_mercado.isFull) {
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
        this.players=[]
    }
    addPlayer(name){
        this.players.push(name)
    }
    isFull(){
        return this.players.lenght>=this.cantidad_judagores
    }
}