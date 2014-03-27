require('seneca')()
  .use('kafka-transport',{queue:{brokers:[{host:'10.37.129.2'}]}})
  .use('../lib/doc.js')
  .listen({type:'queue',partition:parseInt(process.argv[2]||0)})
