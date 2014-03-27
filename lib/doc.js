/* Copyright (c) 2014 Richard Rodger, MIT License */
"use strict";


var _ = require('underscore')




module.exports = function( options ) {
  var seneca = this
  var plugin = 'doc'


  options = seneca.util.deepextend({
  },options)
  

  var clockent = seneca.make('clock')



  seneca.add({ role:plugin, kind:'clock', cmd:'get' }, clock_get)
  seneca.add({ role:plugin, kind:'clock', cmd:'set' }, clock_set)



  function clock_get( args, done ) {
    clockent.load$(args.id,done)
  }


  function clock_set( args, done ) {
    clockent.make$(args).save$(done)
  }



  seneca.add({init:plugin}, function( args, done ){
    seneca.act('role:util, cmd:define_sys_entity', {list:[clockent.canon$()]})
    done()
  })


  return {
    name: plugin
  }
}
