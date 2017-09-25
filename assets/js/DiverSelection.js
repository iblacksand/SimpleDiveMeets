const $ = require('jQuery');
const JSONHandler = require('./assets/js/JSONHandler.js');
const Toolbox = require('./assets/js/Toolbox.js');
var eventlist;

console.log('startingto get json');

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
