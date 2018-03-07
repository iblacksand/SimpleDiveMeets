const Dive = require('./Dive.js');
var list = [];
var comp = false;
const JSONHandler = require('./JSONHandler.js');
JSONHandler.GetJSON("./data/DiveList.json").then((obj) => {
    list = obj;
    comp = true;
    $("#loadingmodal").remove();
});


exports.getDive = diveFetch;

function diveFetch(code, boardHeight, inter = 0) {
    if (inter === 50) {
        return new Dive({
            "Dive Description": "ERROR: List not loaded"
        });
    }
    if (!comp) {
        return setTimeout(diveFetch(code, boardHeight), 500, inter + 1);
    }
    
    for (let i = 0; i < list.length; i++) {
        if (list[i]["Dive Code"] === code.toUpperCase() && list[i]["Board"] === boardHeight.toUpperCase()) {
            console.log(new Dive(list[i]));
            return new Dive(list[i]);
        }
    }
    return new Dive({
        "Dive Description": "ERROR"
    });
}