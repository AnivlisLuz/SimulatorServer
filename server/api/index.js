exports.setApi = app => {
    app.get('/api', (req, client) => {
        console.log(req.query)
        client.send(req.query)
    })
    app.get('/api/version', (req, client) => {
        client.send("v 1.0")
    })
}