
require('seneca')()

  .use('jsonfile-store',{
    folder: __dirname+'/../data/doc'
  })

  .use('redis-transport')
  .use('beanstalk-transport')

  .use('../lib/doc.js')

  .listen({
    type: 'beanstalk',
    pin:  {role:'doc',kind:'clock',cmd:'*'},
    host: process.env.BEANSTALK_HOST||'127.0.0.1'
  })

  .client({
    type: 'redis',
    host: process.env.REDIS_HOST||'127.0.0.1'
  })
