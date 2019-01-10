
const db = require("./database")

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
}
function algunag(nombre) {
    console.log(nombre + " otro nombre")
    return true
}