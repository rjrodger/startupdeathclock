'use strict';


var seneca = require('seneca')()

seneca
  //.use('kafka-transport')
  .use('../lib/api.js')
  .client({type:'queue',partition:0})

//seneca.use('../lib/api.js')
//seneca.use('../lib/doc.js')


var kraken = require('kraken-js'),
    app = {};


app.configure = function configure(nconf, next) {
    // Async method run on startup.
    next(null);
};


app.requestStart = function requestStart(server) {
    // Run before most express middleware has been registered.
};


app.requestBeforeRoute = function requestBeforeRoute(server) {
    // Run before any routes have been added.
    server.use( seneca.export('web') )
};


app.requestAfterRoute = function requestAfterRoute(server) {
    // Run after all routes have been added.
};


if (require.main === module) {
    kraken.create(app).listen(function (err) {
        if (err) {
            console.error(err.stack);
        }
    });
}


module.exports = app;
