let calanderInput = document.querySelector("#cal-text");
let calanderForm = document.querySelector("#input-form");
let calanderTimeAndList = document.querySelector("#table");
let numberOfTasks = document.querySelector("#daily-tasks");
let newRow = document.querySelector('#new-row');

let calanders =[];


function ls(){
// get stored items from local storage
let storedItems = JSON.parse(localStorage.getItem("#table"));

//Retrieve stored todos from local storage, and update it to the array
if (storedItems !== null){
    calanders = storedItems;
    }
    //render calanders to the DOM  
    // renderCalander();
}

function storeItems() {
    //Stringify and set "items" key in local storage to calanders array
    localStorage.setItem("calanders", JSON.stringify(calanders));
}
// When an item is submitted...
calanderForm.addEventListener("submit", function(event) {
    event.preventDefault();
  
    var calanderText = calanderInput.value.trim();
  
    // Return from function early if submitted todoText is blank
    if (calanderText === "") {
      return;
    }
  
    // Add new todoText to todos array, clear the input
    calanders.push(calanderText);
    calanderInput.value = "";
  
    // Store updated todos in localStorage, re-render the list
    storeItems();
   
  });
