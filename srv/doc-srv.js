require('seneca')()
  .use('jsonfile-store',{folder:'../data/doc'})
  .use('../lib/doc.js')
  .listen({type:'queue',pin:{role:'doc',kind:'clock',cmd:'*'}})
  .client({type:'pubsub'})

