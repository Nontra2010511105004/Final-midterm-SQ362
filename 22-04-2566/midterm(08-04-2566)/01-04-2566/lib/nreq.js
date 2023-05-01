const nreq = require('./lib/NReq')

//3.1 ใช้ nreq ในการส่ง Request แบบที่ 1 โดยส่ง method post (ต้องได้ Response มาเหมือนการบ้าน)
nreq.post('http','localhost:9818/hi')

//3.2 ใช้ nreq ในการส่ง Request แบบที่ 2 โดยส่ง method get
nreq.request('GET','https','covid19.th-stat.com/api/open/today')

function payload(player_id,username,level){
    const data = require('./player_data.json')
    //data = JSON.stringify(data)
    return data
}



//3.3 ใช้ nreq ในการส่ง Request แบบที่ 1 โดยส่ง method post โดยต้องส่ง payload 
let payload = { "player_id": 15003 }
nreq.post('http','< ip/localhost>:10002/reward/collect', payload )  
//จะต้องกลับมาเป็น  { "code": 1 , "msg": "player collected this rewards" }

//3.4 ใช้ nreq ในการส่ง Request แบบที่ 1 โดยส่ง method post โดยต้องส่ง payload 

let payload = { "player_id": 15001 }
nreq.post('http','< ip/localhost>:10002/reward/collect', payload )  
//จะต้องกลับมาเป็น { "code": 2 , "msg": "player cannot collect this rewards" }*/