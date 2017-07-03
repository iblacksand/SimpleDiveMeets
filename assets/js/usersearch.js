const Fuse = require('Fuse.js');
const {app, BrowserWindow,win} = require('electron');
var $ = require('jQuery');

$('#searchbox').on('change', search);

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
var data;
readTextFile("./Users.json", function(text){
    data = JSON.parse(text);
});

var options = {
  shouldSort: true,
  threshold: 0.6,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: [
    "Dive Code",
    "Dive Description"
]
};

function stringify(ary){
    var s = "";
    for(var i = 0, len = ary.length; i < len; i++) s = s + JSON.stringify(ary[i]) + '\n';
    return s;
}

function search(){
  var fuse = new Fuse(data, options); // "list" is the item array
//   console.log(document.getElementById('searchbox').value);
  var result = fuse.search(document.getElementById('searchbox').value);
//   var resulttext = JSON.stringify(result);
//   document.getElementById('results').value = resulttext;
$("#mytable tbody").remove();
  var tbl=$("<table/>").attr("id","mytable");
    $("#div1").append(tbl);
    for(var i=0;i<result.length;i++)
    {
        var tr="<tr>";
        var td1="<td>"+result[i]["Dive Code"]+"</td>";
        var td2="<td>"+result[i]["Dive Description"]+"</td>";
        var td3="<td>"+result[i]["DD"]+"</td></tr>";

       $("#mytable").append(tr+td1+td2+td3); 

    }   
}
