
require('seneca')()

  .use('redis-transport')

  .use('../lib/real.js')

  .listen({
    type: 'redis',
    host: process.env.REDIS_HOST||'127.0.0.1'
  })

  .listen(9001,'0.0.0.0')
