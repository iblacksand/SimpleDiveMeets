var $ = require('jquery');
function addNewEvent(){
    let last = $('#last-eventdiv');
    last.removeAttr('id');
    last.after('<div class="field"><div class="field has-addons" id="last-eventdiv"><div class="control is-expanded"><input class="input" type="text" placeholder="Event Name"></div><div class="control"><div class="select"><select><option>1M</option><option>3M</option></select></div></div></div></div>');
}