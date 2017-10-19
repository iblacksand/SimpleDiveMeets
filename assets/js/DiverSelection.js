const $ = require('jQuery');
const JSONHandler = require('./assets/js/JSONHandler.js');
const Toolbox = require('./assets/js/Toolbox.js');
var eventlist;

console.log('startingto get json');

$('#eventlist').on('change', () => {
    $('#diverSelectDiv').html("");
    JSONHandler.GetJSON("./data/meets/" + Toolbox.getParam("meet") + "/" + eventlist[$("#eventlist")[0].selectedIndex][0] +"/DiverList.json").then((obj) => {
        let innerhtml = "<center><div class=\"select is-multiple\"><select multiple>";
        for(let i = 0; i < obj.length; i++){
            innerhtml += "<option value=\"" + obj[i] + "\"P>" + obj[i] + "</option>";   
        }
        innerhtml += "</select></div></center>";
        $("#diverSelectDiv").html(innerhtml);
    });
});

JSONHandler.GetJSON("./data/meets/" + Toolbox.getParam("meet") + "/EventList.json").then((obj) => {
    eventlist = obj;
    console.log('creating select');
    createEventSelect();
});


function createEventSelect(){
    let innerhtml = "";
    for(let i = 0; i < eventlist.length; i++){
        innerhtml += "<option>" + eventlist[i][1] + "</option>";   
    }
    $("#eventlist").html(innerhtml);
}
