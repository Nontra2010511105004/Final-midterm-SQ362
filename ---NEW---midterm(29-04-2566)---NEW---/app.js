module.exports = { key01:'test',request,reques}

const func = require('./nreq.js')
console.log(func.key01)

const https = require('https')
const http = require('http')
function request(method,protocal,host,port,path,payload,headers){
    const options = {
        method: method ,
        protocal: protocal ,
        host: host,
        port: port,
        path:path,
        headers: headers
    }
    if(method === `POST`){
        payload = JSON.stringify(payload)
    }
    let req = http.request(options,(resp)=> {
        
        let respdata = ``
    
        resp.on(`data`,(chunk)=>{
            respdata += chunk.toString()
        })
    
        resp.on(`end`, function(){
            let resp = convertStringtoJSON(respdata)
            //let resp = JSON.parse(respdata)
            console.log(resp)
        })
        
    
    })    
    req.end()
    function convertStringtoJSON(data)
    {
        try{  
        return JSON.parse(data) 
        }catch(excp){  
        return data 
        }
    }
}