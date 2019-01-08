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
}