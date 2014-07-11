"use strict";


var _ = require('underscore')

var Hapi = require('hapi')
var Good = require('good')

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


var server = new Hapi.Server('localhost', 3000)


server.route({
  method: ['GET','POST', 'PUT', 'DELETE'],
  path:   '/api/1.0/{api_end_point*}',

  handler: function(request, reply) {
    var req = request.raw.req
    var res = request.raw.res
    
    req.body = _.extend({},request.payload,request.query,request.params)

    seneca_web( req, res, function(){
      request.reply.payload().code(404).send()
    })
  }
})


server.route({
  method: 'GET',
  path: '/{param*}',
  handler: {
    directory: {
      path: 'public',
      index: true
    }
  }
})


server.pack.register(Good, function (err) {
  if(err) process.exit( !console.error(err) );
  
  server.start(function() {
    server.log('info', 'Hapi running at: ' + server.info.uri)
  })
})
