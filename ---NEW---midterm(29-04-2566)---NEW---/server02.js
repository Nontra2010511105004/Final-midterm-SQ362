const http = require('http')
const https = require ('https')
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
    
    if(method === `POST` && requrl ===``){
        response.write(`"code": 4 , "msg": "nothing" `)
    }
    else if(method === `POST` && requrl === `/hi`){
        response.write(`Hello on Post`)
    }
    else{
        response.write(`Nothing...`)
    }
    response.end()
}