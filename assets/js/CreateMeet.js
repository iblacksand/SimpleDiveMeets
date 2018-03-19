var $ = require('jquery');
var totalevents = 1;
function addNewEvent(){
    let last = $('#last-eventdiv');
    last.removeAttr('id');
    last.after('<div class="field"><div class="field has-addons" id="last-eventdiv" style="display:flex;justify-content:center;align-items:center;"><div class="control is-expanded"><input class="input" type="text" placeholder="Event Name"></div><div class="control"><div class="select"><select><option>1M</option><option>3M</option></select></div> <a class="delete" style="padding-left: 5pt" onclick="deleteEvent(' + totalevents + ')"></a></div></div></div>');
    $("#last-eventdiv").attr('position', totalevents);
    totalevents++;
}

function deleteEvent(index){
    let toDelete = $("div[position='" + index +"']");
    if(toDelete.attr("id") == "last-eventdiv") changeLast(index);
    toDelete.remove();
}

function changeLast(index){
    index--;
    if($("div[position='" + index +"']").length){
        $("div[position='" + index +"']").attr("id", "last-eventdiv");
        return;
    }
    changeLast(index);
}