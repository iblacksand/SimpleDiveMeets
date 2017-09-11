// 'use strict';
const Dive = require('./Dive.js');

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

//usage:
var list = [];
readTextFile("./data/DiveList.json", function(text){
    list = JSON.parse(text);
    console.log(list);
});

function getDiveList(){
    return list;
}

exports.getDive = function (code, boardHeight){
    console.log("Code: " + code + "\nBoard: " + boardHeight);
    for(let i = 0; i < list.length; i++){
        console.log(list[i]["Dive Code"] + "\n" + list[i]["Board"]);
        if(list[i]["Dive Code"] === code.toUpperCase() && list[i]["Board"] === boardHeight.toUpperCase()){
            console.log(new Dive(list[i]));
            return new Dive(list[i]);
        }
    }
    return new Dive({
        "Dive Description" : "ERROR"
    });
};