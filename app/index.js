const WebSocket = require('ws');

const wss = new WebSocket.Server({
  host: '10.13.64.25',
  port: 8080
})

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.info('received: %s', message)
  })

  ws.send('something')
})