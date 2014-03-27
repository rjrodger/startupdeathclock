/* Copyright (c) 2014 Richard Rodger, MIT License */
"use strict";


var _ = require('underscore')




module.exports = function( options ) {
  var seneca = this
  var plugin   = 'api'

  var version = '1.0'


  options = seneca.util.deepextend({
    prefix:'/api/'
  },options)
  

  seneca.add({ role:plugin, end:'load' }, end_load)
  seneca.add({ role:plugin, end:'update' }, end_update)
  seneca.add({ role:plugin, end:'hist' }, end_hist)
  seneca.add({ role:plugin, end:'live' }, end_live)



  function end_load( args, done ) {
    this.act('role:doc, kind:clock, cmd:get', args, done)
  }


  function end_update( args, done ) {
    this.act('role:doc, kind:clock, cmd:set', args, done)
  }


  function end_hist( args, done ) {
    this.act('role:hist, kind:clock, cmd:range', args, done)
  }


  function end_live( args, done ) {
    this.act('role:real, kind:clock, cmd:get', args, done)
  }



  // web interface
  seneca.act({role:'web', use:{
    prefix:options.prefix+version+'/',
    pin:{role:plugin,end:'*'},
    map:{
      'load':   { GET:true,  alias:'load/:id' },
      'update': { POST:true, alias:'update/:id?' },
      'hist':   { GET:true },
      'live':   { GET:true },
    }
  }})


  seneca.add({init:plugin}, function( args, done ){
    done()
  })


  return {
    name: plugin
  }
}
