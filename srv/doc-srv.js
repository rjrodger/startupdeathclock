require('seneca')()
  .use('../lib/doc.js')
  .listen({type:'queue',pin:{role:'doc',kind:'clock',cmd:'*'}})
  .client({type:'pubsub'})

