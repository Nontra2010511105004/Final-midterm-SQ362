const http = require('http')
const GET = process.env.GET || 10001

let server = http.createServer(onClientRequest)
server.listen(GET)
console.log('Server started listening in' + GET)





console.log(Allplayer)