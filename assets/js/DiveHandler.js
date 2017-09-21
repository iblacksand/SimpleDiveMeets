const Dive = require('./Dive.js');
const JSONHandler = require('./JSONHandler.js');

var list = [];


JSONHandler.GetJSON("./data/DiveList.json").then((obj) =>{
    list = obj;
});


exports.getDive = function (code, boardHeight){
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