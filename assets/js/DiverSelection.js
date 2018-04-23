const $ = require('jquery');
const JSONHandler = require('./assets/js/JSONHandler.js');
const Toolbox = require('./assets/js/Toolbox.js');
var eventlist;

console.log('starting to get json');

$('#eventselectbutton').on('click', () => {
    $('#diverSelectDiv').html("");
    JSONHandler.GetJSON("./data/meets/" + Toolbox.getParam("meet") + "/" + eventlist[$("#eventlist")[0].selectedIndex][0] + "/DiverList.json").then((obj) => {
        let innerhtml = "<div style=\"width:90%;\" class=\"select is-multiple\"><select style=\"width:90%;\" multiple size=\"" + obj.length + "\">";
        for (let i = 0; i < obj.length; i++) {
            innerhtml += "<option value=\"" + obj[i] + "\">" + obj[i] + "</option>";
        }
        innerhtml += "</select></div>";
        $("#diverSelectDiv").html(innerhtml);
    });
});

JSONHandler.GetJSON("./data/meets/" + Toolbox.getParam("meet") + "/EventList.json").then((obj) => {
    eventlist = obj;
    console.log('creating select');
    createEventSelect();
});


/**
 * Creates the event list in DiverSelection.html
 */
function createEventSelect() {
    let innerhtml = "";
    for (let i = 0; i < eventlist.length; i++) {
        innerhtml += "<option>" + eventlist[i][1] + "</option>";
    }
    $("#eventlist").html(innerhtml);
}