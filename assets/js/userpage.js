var $ = require('jquery');
const {app, BrowserWindow,win} = require('electron');

var parameters = location.search.substring(1).split("&");
var name = unescape(parameters[0].split("=")[1]).toLowerCase();
console.log(name);

/**
 * gets the value of a parameter
 * @param {string} name the name of the parameter
 * @param {string} url the url of the window
 * @returns {string} the value of the parameter
 */
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    };
    rawFile.send(null);
}

readTextFile("./data/" + name + ".json", function(text){
    let data = JSON.parse(text)[0];
    console.log(data + " : " + data["dive1"]);
    var line = createDiv(data["dive1"]) + createDiv(data["dive2"]) + createDiv(data["dive3"]) + createDiv(data["dive4"]);
    console.log(line);
    $("#divelist").append(line);
});

/**
 * Creates a div object out of a dive given
 * @param {string} dive the dive to add
 * @returns {string} html string of the div to add to the html page
 */
function createDiv(dive){
    var div = '<div class="content container">' + 
    '<input class="check" type="checkbox" id="' + dive + '" name="' + dive + '">'+
    '<label for="' + dive + '">' + dive + '</label></div>';
    return div;
}

