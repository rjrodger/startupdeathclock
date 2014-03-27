process.title = 'real'

require('seneca')()
  .use('../lib/real.js')
  .listen({type:'pubsub'})
  .listen({port:9001})
