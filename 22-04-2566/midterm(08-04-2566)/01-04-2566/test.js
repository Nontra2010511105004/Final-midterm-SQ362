function player(player_id,username,level){

    const data = require('./player_data.json')
    return data
    console.log(data)
}

function convertStringtoJSON(player)
    {
        try{  
        return JSON.parse(player) 
        }catch(excp){  
        return player 
        }
    }
    
