const restify = require('restify'),
    server = restify.createServer(),
    corsMiddleware = require('restify-cors-middleware'),
    cors = corsMiddleware({
        preflightMaxAge: 5, //Optional
        origins: ['*'],
        allowHeaders: ['Authorization'],
        exposeHeaders: ['*']
    });

server.pre(cors.preflight)
server.use(cors.actual)

// Enable POST and Get param reader
server.use(restify.plugins.bodyParser({ mapParams: false }));
server.use(restify.plugins.queryParser({ mapParams: false }))

// API routes
require('./app/routes')(server);

// connect with database
require('./db-connection').then(db => {
    // initialize Server
    server.listen(process.env.PORT, '0.0.0.0', () => {
        console.info(`Server is running on port ${process.env.PORT}`)
    })
}).catch(err => {
    console.error(`Database error: ${err.message}`)
})