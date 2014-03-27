/* Copyright (c) 2014 Richard Rodger, MIT License */
"use strict";


var _     = require('underscore')
var stats = require('rolling-stats')



module.exports = function( options ) {
  var seneca = this
  var plugin = 'real'

  
  var clockstats = stats()


  seneca.add({ role:'hist', kind:'clock' }, clock_real)

  seneca.add({ role:plugin, kind:'clock', cmd:'get' }, clock_get)


  function clock_real( args, done ) {
    clockstats.point(1)
    done()
  }


  function clock_get( args, done ) {
    done(null,clockstats.calculate())
  }


  return { name: plugin }
}
