var redis_host = process.env.REDIS_HOST||'127.0.0.1'
var beanstalk_host = process.env.BEANSTALK_HOST||'127.0.0.1'


require('seneca')()
  .use('jsonfile-store',{folder:'../data/doc'})
  .use('../lib/doc.js')
  .listen({type:'queue',pin:{role:'doc',kind:'clock',cmd:'*'},host:beanstalk_host})
  .client({type:'pubsub',host:redis_host})

