const Dive = require('./Dive.js');

var list = [];
var comp = false;
JSONHandler.GetJSON("./data/DiveList.json").then((obj) =>{
    list = obj;
    comp = true;
});


exports.getDive = diveFetch;
function diveFetch(code, boardHeight){
    if(!comp){
        setTimeout(diveFetch(code, boardHeight), 50);
    }
    for(let i = 0; i < list.length; i++){
        if(list[i]["Dive Code"] === code.toUpperCase() && list[i]["Board"] === boardHeight.toUpperCase()){
            console.log(new Dive(list[i]));
            return new Dive(list[i]);
        }
    }
    return new Dive({
        "Dive Description" : "ERROR"
    });
}; 