const controllers = require('./controllers'),
    middleware = require('./middlewares');

module.exports = (server) => {
    server.get('/', (req, res) => {
        return res.send(200, { status: true, message: 'Server is running', data: {} })
    })

    server.post('/addresses', middleware.address.post, controllers.address.post)
}