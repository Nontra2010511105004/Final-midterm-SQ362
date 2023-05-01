const http = require('http')
const https = require ('https')
const PORT = process.env.PORT || 10001

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
    
    if(method === `GET` && requrl === `/hi`)
    {
        response.write(`Hello on Get`)
    }
    if(method === `POST` && requrl ===`player`){
        response.write(`"code": 4 , "msg": "nothing" }`)
    }
    else if(method === `POST` && requrl === `/player_id`){
        response.write(`code : 1 ,+ player`)
    }    
    else{
        response.write(`code : 3 , msg: player not found `)
    }
    response.end()
}
function player(player_id,username,level){
    const data = require('./player_data.json')
    data = JSON.stringify(data)
    return data
    
    }