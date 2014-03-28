/* Copyright (c) 2014 Richard Rodger, MIT License */
"use strict";


var _       = require('underscore')
var success = require('success')




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
    var seneca = this

    clockent.load$(args.id, success(done,function( clock ){
      clock = clock || clockent.make$()

      clock.data$({
        cash: args.cash,
        expm: args.expm,
        revm: args.revm,
        from: args.from,
        name: args.name,

      }).save$(success(done,function(clock){
        done(null,clock)

        seneca.act('role:hist,kind:clock',clock)
      }))
    }))
  }



  seneca.add({init:plugin}, function( args, done ){
    seneca.act('role:util, cmd:define_sys_entity', {list:[clockent.canon$()]})
    done()
  })


  return {
    name: plugin
  }
}
