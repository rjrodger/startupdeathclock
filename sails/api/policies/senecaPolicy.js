

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

module.exports = function(req,res,next){
  console.log('aaa',req.url)
  seneca_web(req,res,next)
}
