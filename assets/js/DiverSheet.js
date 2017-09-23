const $ = require('jQuery');
const JSONHandler = require('./assets/js/JSONHandler.js');
const DiveHandler = require('./assets/js/DiveHandler.js');

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

let jsonpath = "./data/meets/" + getParameterByName("meet") + "/" + getParameterByName("event")+ "/" + getParameterByName("first") + getParameterByName("last") + ".json";

let board = getParameterByName('board');

JSONHandler.GetJSON(jsonpath).then((obj) =>{
    console.table(obj);
    console.log(obj);
    var diverdata = obj;
    let tablehead = "<tr><th>Dive</th><th>Dive Description</th>";
    for(let i = 0; i < diverdata["scores"][0].length; i++){
        tablehead += "<th>" + (i + 1) + "</th>";
    }
    tablehead += "</tr>";

    let tablebody = "";
    for(let i = 0; i < diverdata["dives"].length;i++){
        let curline = "<tr><td><input type=\"text\" placeholder=\"" + diverdata["dives"][i] + "\" value=\""  + diverdata["dives"][i] + "\"></td><td>" + DiveHandler.getDive(diverdata["dives"][i], board) + "</td>";
        for(let j = 0; j < diverdata["scores"][i].length; j++){
            curline += "<td><input type=\"text\" placeholder=\"" + diverdata["scores"][i][j] + "\" value=\"" +diverdata["scores"][i][j]+ "\"> </td>";
        }
        tablebody += curline;
    }

    $("#divetable").html(tablehead + tablebody);
    $("#loadingmodal").attr("class", "modal");
});


$("h1").text(getParameterByName("first") + " " + getParameterByName("last")); 