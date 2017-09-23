const $ = require('jQuery');
const JSONHandler = require('./assets/js/JSONHandler.js');

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

JSONHandler.GetJSON(jsonpath).then((obj) =>{
    console.table(obj);
    console.log(obj);
    var diverdata = obj;
    let tablehead = "<tr><th><span><input type=\"text\" value=\"dive\"/></span></th><th>Dive Description</th>";
    for(let i = 0; i < diverdata["scores"][0].length; i++){
        tablehead += "<th>" + (i + 1) + "</th>";
    }
    tablehead += "</tr>";

    for(let i = 0; i < diverdata[""];i++);

    $("#divetable").html(tablehead);
    $("#loadingmodal").attr("class", "modal");
});


$("h1").text(getParameterByName("first") + " " + getParameterByName("last")); 