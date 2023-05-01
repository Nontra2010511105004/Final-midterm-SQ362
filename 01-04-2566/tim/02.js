const http = require('http')
const PORT = process.env.PORT || 10002

let server = http.createServer(onClientRequest)
server.listen(PORT)
console.log('Server started listening in' + PORT)

function onClientRequest(request,response)
{
    response.writeHead(200)
    /*console.log(request.method)
    console.log(request.url)*/
    let method = request.method
    let requrl = request.url
    
    if(method === `GET` && requrl ===`/morethen10`){
        response.write('player cannot collect this rewards')
    }
    else if(method === `POST` && requrl === `/404`){
        response.write(`player cannot collect this rewards`)
    }
    else{
        response.write(`player collected this rewards`)
    }
    response.end()
}