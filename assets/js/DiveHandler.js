// 'use strict';
const Dive = require('./Dive.js');

// function readTextFile(file, callback) {
//     var rawFile = new XMLHttpRequest();
//     rawFile.overrideMimeType("application/json");
//     rawFile.open("GET", file, true);
//     rawFile.onreadystatechange = function() {
//         if (rawFile.readyState === 4 && rawFile.status == "200") {
//             callback(rawFile.responseText);
//         }
//     };
//     rawFile.send(null);
// }
fs = require('fs');
var list;
fs.readFile("./data/DiveList.json", function(err,data){
    list = JSON.parse(data);
});
// function readTextFile(file, callback) {
//     var rawFile = new XMLHttpRequest();
//     rawFile.overrideMimeType("application/json");
//     rawFile.open("GET", file, true);
//     rawFile.onreadystatechange = function() {
//         if (rawFile.readyState === 4 && rawFile.status == "200") {
//             callback(rawFile.responseText);
//         }
//     };
//     rawFile.send(null);
// }
// var list;
// readTextFile("./data/DiveList.json", function(text){
//     list = JSON.parse(text);
// });

function getDiveList(){
    return list;
}

exports.getDive = function (code, boardHeight){
    console.table(d[0]);
    for(var d in list){
        if(d["Dive Code"] === code.toUpper() && d["Board"] === boardHeight.toUpper()){
            return d;
        }
    }
    return new Dive({
        "Dive Description" : "ERROR"
    });
}