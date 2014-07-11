
require('seneca')()

  .use('level-store',{
    folder: __dirname+'/../data/hist'
  })

  .use('redis-transport')

  .use('../lib/hist.js')

  .listen({
    type: 'redis',
    host: process.env.REDIS_HOST||'127.0.0.1'
  })

  .listen(9000)
