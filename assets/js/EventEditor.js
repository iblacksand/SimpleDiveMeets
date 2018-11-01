var $ = require('jquery');
const Toolbox = require('./assets/js/Toolbox.js');

var isNewEvent = (Toolbox.getParam("NewEvent") === 'true');

if(isNewEvent){
    $("#diver-button").hide();
}





