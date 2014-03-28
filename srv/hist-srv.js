var redis_host = process.env.REDIS_HOST||'127.0.0.1'

require('seneca')()
  .use('level-store',{folder:'../data/hist'})
  .use('../lib/hist.js')
  .listen({type:'pubsub',host:redis_host})
  .listen({port:9000})
