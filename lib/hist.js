/* Copyright (c) 2014 Richard Rodger, MIT License */
"use strict";


var _ = require('underscore')



module.exports = function( options ) {
  var seneca = this
  var plugin = 'hist'


  var histclockent = seneca.make('hist/clock')


  seneca.add({ role:'hist', kind:'clock' }, clock_hist)
  seneca.add({ role:'hist', kind:'clock', cmd:'range' }, clock_range)


  function clock_hist( args, done ) {
    var histclock = histclockent.make$(args)
    histclock.when = new Date().getTime()
    histclock.save$(done)
  }


  function clock_range( args, done ) {
    histclockent.list$({sort$:{when:-1}},done)
    //histclockent.list$({},done)
  }


  return { name: plugin }
}
