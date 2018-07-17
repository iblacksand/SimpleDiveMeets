var $ = require('jquery');

var totalevents = 1;

function init(){
    $("#name-page").show();
    $("#event-page").hide();
    $("#final-page").hide();
}

var liID = "#li1";

init();

/**
 * This creates a new event box that appears on CreateMeet.html
 */
function addNewEvent(){
    let last = $('#last-eventdiv');
    last.removeAttr('id');
    last.after('<div class="field"><div class="field has-addons" id="last-eventdiv" style="display:flex;justify-content:center;align-items:center;"><div class="control is-expanded"><input class="input" type="text" placeholder="Event Name"></div><div class="control"><div class="select"><select><option>1M</option><option>3M</option></select></div> <a class="delete" style="padding-left: 5pt" onclick="deleteEvent(' + totalevents + ')"></a></div></div></div>');
    $("#last-eventdiv").attr('position', totalevents);
    totalevents++;
}

/**
 * Removes the event box at the index provided
 * @param {int} index 
 */
function deleteEvent(index){
    let toDelete = $("div[position='" + index +"']");
    if(toDelete.attr("id") == "last-eventdiv") changeLast(index);
    toDelete.remove();
}

/**
 * Makes the event box right before the index hav the id of 'last-evendiv'
 * @param {int} index 
 */
function changeLast(index){
    index--;
    if($("div[position='" + index +"']").length){
        $("div[position='" + index +"']").attr("id", "last-eventdiv");
        return;
    }
    changeLast(index);
}

function showPage(page){
    var pos = ['#name-page', '#event-page', "#final-page"];
    for(let i = 0; i < pos.length; i++){
        if(pos[i] == page){
            $(pos[i]).show();
        }
        else{
            $(pos[i]).hide();
        }
    }
}

function makeActive(li){
    $(liID).removeClass("is-active");
    $(li).addClass("is-active");
    liID = li;
}


document.addEventListener('DOMContentLoaded', function () {
    var datePickers = bulmaCalendar.attach('[type="date"]', {
      overlay: true,
      minDate: '2018-01-01',
      maxDate: '2018-12-31'
    });
    // datePickers now contains an Array of all datePicker instances
  });