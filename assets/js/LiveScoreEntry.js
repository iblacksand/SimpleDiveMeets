var $ = require('jquery');

/**
 * Reads a text file and retuns a string
 * @param {string} file path of the file
 * @param {function} callback callback function
 * @return {string} the file contents
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


/**
 * gets the value of a parameter
 * @param {string} name the name of the parameter
 * @param {string} url the url of the window
 * @returns {string} the value of the parameter
 */
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var divers;

readTextFile("./data/DiveList.json", function(text){
    divers = JSON.parse(text);
});