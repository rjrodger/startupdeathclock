
var _ = require('underscore')

require('sails')
  .lift( _.extend({port:3000},require('optimist').argv))
