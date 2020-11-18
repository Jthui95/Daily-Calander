// Function that sets current date

$(document).ready(function() {
  let dateParagraph = $('#currentDay');
  let todayDate = moment().format('dddd, MMMM Do YYYY');
  dateParagraph.text(todayDate);
});


//Saves user input

let input_textarea1 = document.querySelector('#slot1');
let save_button1 = document.querySelector('#saveSlot1');
// shows previously saved text
input_textarea1.value = localStorage.getItem('info1');
//saves information in the text area
saveSlot1.addEventListener('click', updateOutput1);
// saves the input to local storage
function updateOutput1() {
  localStorage.setItem('info1', input_textarea1.value)
};

let input_textarea2 = document.querySelector('#slot2');
let save_button2 = document.querySelector('#saveSlot2');
// shows previously saved text
input_textarea2.value = localStorage.getItem('info2');
//saves information in the text area
saveSlot2.addEventListener('click', updateOutput2);
// saves the input to local storage
function updateOutput2() {
  localStorage.setItem('info2', input_textarea2.value)
};

let input_textarea3 = document.querySelector('#slot3');
let save_button3 = document.querySelector('#saveSlot3');
// shows previously saved text
input_textarea3.value = localStorage.getItem('info3');
//saves information in the text area
saveSlot3.addEventListener('click', updateOutput3);
// saves the input to local storage
function updateOutput3() {
  localStorage.setItem('info3', input_textarea3.value)
};

let input_textarea4 = document.querySelector('#slot4');
let save_button4 = document.querySelector('#saveSlot4');
// shows previously saved text
input_textarea4.value = localStorage.getItem('info4');
//saves information in the text area
saveSlot4.addEventListener('click', updateOutput4);
// saves the input to local storage
function updateOutput4() {
  localStorage.setItem('info4', input_textarea4.value)
};

let input_textarea5 = document.querySelector('#slot5');
let save_button5 = document.querySelector('#saveSlot5');
// shows previously saved text
input_textarea5.value = localStorage.getItem('info5');
//saves information in the text area
saveSlot5.addEventListener('click', updateOutput5);
// saves the input to local storage
function updateOutput5() {
  localStorage.setItem('info5', input_textarea5.value)
};

let input_textarea6 = document.querySelector('#slot6');
let save_button6 = document.querySelector('#saveSlot6');
// shows previously saved text
input_textarea6.value = localStorage.getItem('info6');
//saves information in the text area
saveSlot6.addEventListener('click', updateOutput6);
// saves the input to local storage
function updateOutput6() {
  localStorage.setItem('info6', input_textarea6.value)
};

let input_textarea7 = document.querySelector('#slot7');
let save_button7 = document.querySelector('#saveSlot7');
// shows previously saved text
input_textarea7.value = localStorage.getItem('info7');
//saves information in the text area
saveSlot7.addEventListener('click', updateOutput7);
// saves the input to local storage
function updateOutput7() {
  localStorage.setItem('info7', input_textarea7.value)
};

let input_textarea8 = document.querySelector('#slot8');
let save_button8 = document.querySelector('#saveSlot8');
// shows previously saved text
input_textarea8.value = localStorage.getItem('info8');
//saves information in the text area
saveSlot8.addEventListener('click', updateOutput8);
// saves the input to local storage
function updateOutput8() {
  localStorage.setItem('info8', input_textarea8.value)
};

let input_textarea9 = document.querySelector('#slot9');
let save_button9 = document.querySelector('#saveSlot9');
// shows previously saved text
input_textarea9.value = localStorage.getItem('info9');
//saves information in the text area
saveSlot9.addEventListener('click', updateOutput9);
// saves the input to local storage
function updateOutput9() {
  localStorage.setItem('info9', input_textarea9.value)
};

// coloring time

let now = new Date().getHours();

if (now > 9) {
    $('#slot1').addClass('past');
  }
  else if (now >= 9 && now < 10) {
    $('#slot1').addClass('present')
  }
  else if (now < 9) {
    $('#slot1').addClass('future')
  }

if (now > 10) {
    $('#slot2').addClass('past');
  }
  else if (now >= 10 && now < 11 ) {
    $('#slot2').addClass('present')
  }
  else if(now < 10) {
    $('#slot2').addClass('future')
  }

if (now > 11) {
    $('#slot3').addClass('past');
  }
  else if (now >= 11 && now < 12 ) {
    $('#slot3').addClass('present')
  }
  else if(now < 11) {
    $('#slot3').addClass('future')
  }

if (now > 12) {
    $('#slot4').addClass('past');
  }
  else if (now >= 12 && now < 13 ) {
    $('#slot4').addClass('present')
  }
  else if(now < 12) {
    $('#slot4').addClass('future')
  }

if (now > 13) {
    $('#slot5').addClass('past');
  }
  else if (now >= 13 && now < 14 ) {
    $('#slot5').addClass('present')
  }
  else if(now < 13) {
    $('#slot5').addClass('future')
  }

if (now > 14) {
    $('#slot6').addClass('past');
  }
  else if (now >= 14 && now < 15 ) {
    $('#slot6').addClass('present')
  }
  else if(now < 14) {
    $('#slot6').addClass('future')
  }

if (now > 15) {
    $('#slot7').addClass('past');
  }
  else if (now >= 15 && now < 16 ) {
    $('#slot7').addClass('present')
  }
  else if(now < 15) {
    $('#slot7').addClass('future')
  }

if (now > 16) {
    $('#slot8').addClass('past');
  }
  else if (now >= 16 && now < 17) {
    $('#slot8').addClass('present')
  }
  else if(now < 16) {
    $('#slot8').addClass('future')
  }

if (now > 17) {
    $('#slot9').addClass('past');
  }
  else if (now >= 17 && now < 18 ) {
    $('#slot9').addClass('present')
  }
  else if(now < 17) {
    $('#slot9').addClass('future')
  }