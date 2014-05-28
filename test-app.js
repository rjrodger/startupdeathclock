
var connect = require('connect')
var seneca = require('seneca')()

seneca.use('./lib/api.js')
seneca.use('./lib/doc.js')
seneca.use('./lib/hist.js')
seneca.use('./lib/real.js')


var app = connect()

app.use( seneca.export('web') )

app.listen(3000)

