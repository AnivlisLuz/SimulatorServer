exports.setApi = app => {
    app.get('/', (req, client) => {
        client.send("hello world!")
    })
    app.get('/*', (req, client) => {
        console.log(req.query)
        client.json(req.query)
    })
}