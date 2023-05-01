const http = require('http')
//const https = require ('https')
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
    
    if(medhod === `POST` && requrl ===`/get`){
        response.write(`code : 4 , ` + "nothing" )
    }
    else if(method === `POST` && requrl === `/player`){
        response.write(`code : 1 , ` + player())
    }
    else if(method === `POST` && requrl === `/hi`){
        response.write(`Hello on Post`)
    }
    else{
        response.write(`"code" , 4 , "msg" : "player not found"`)
    }
    response.end()
}
function player(player_id,username,level){
const data = require('./player_data.json')
//data = JSON.stringify(data)
return data
//console.log(data[0])

}

/*function player_15001(player_id,username,level){
    
  
}*/

/*function convertStringtoJSON(player)
{
    try{  
    return JSON.parse() 
    }catch(excp){  
    return player 
    }
}*/

