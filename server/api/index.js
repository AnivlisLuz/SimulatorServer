let contador = 0
exports.setApi = app => {
    app.get('/api', (req, client) => {
        contador++
        req.query.contador = contador
        console.log(req.query)
        client.send(req.query)
    })
    app.get('/api/version', (req, client) => {
        client.send("v 1.0")
    })
    app.get('/produccion/*', (req, client) => {
        console.log("produccion "+req.query)
        client.send("produccion")
    })
    app.post('/empresa/*', (req, client) => {
        console.log(req.body)
        client.send("hola")
    })
    app.post('/bimestre', (req, client) => {
        console.log("inversion en marqkerin =>"+req.body)
        client.send("bimestre ")
    })
}