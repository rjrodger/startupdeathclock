"use strict";


var _ = require('underscore')

var express     = require('express')
var bodyParser  = require('body-parser')
var serveStatic = require('serve-static')
var morgan      = require('morgan')

var seneca = require('seneca')()


seneca

  .use('beanstalk-transport')

  .use('../lib/api.js')

  .client({
    port: 9000,
    pin:  {role:'hist',kind:'clock',cmd:'*'},
    host: process.env.HIST_HOST||'127.0.0.1'
  })

  .client({
    port: 9001,
    pin:  {role:'real',kind:'clock',cmd:'*'},
    host: process.env.REAL_HOST||'127.0.0.1'
  })

  .client({
    type: 'beanstalk',
    pin:  {role:'doc',kind:'clock',cmd:'*'},
    host: process.env.BEANSTALK_HOST||'127.0.0.1'
  })

var seneca_web = seneca.export('web')



var app = express()

app.use( morgan() )
app.use( express.query() )
app.use( bodyParser.urlencoded({extended: true}) )
app.use( bodyParser.json() )

app.use( serveStatic(__dirname + '/public') )

app.use( seneca.export('web') )

app.listen(3000)
