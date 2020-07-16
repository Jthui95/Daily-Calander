let calanderInput = document.querySelector("#cal-text");
let calanderForm = doucument.querySelector("#input-form");
let calanderTimeAndList = document.querySelector("#table");
let numberOfTasks = document.querySelector("#daily-tasks");
let newRow = document.querySelector('#new-row')

let calanders =[];

ls();

function renderCalander(){
    //clear calanderlist element and update
    calanderTimeAndList.innerHTML = "";
  numberOfTasks.textContent = calanders.length;
    // Creates a new input for each hour
for (let i = 0; i < calanders.length; i++) {
    let calander = calanders[i];
    //create new rows
    let row = document.createElement("tr");
    row.textContent = calander;
    row.setAttribute("data-index", i);
    
    let rowInput = document.createElement("td");
        rowInput.textContent = calanderInput;
    
        row.appendChild(rowInput);
        newRow.appendChild(row);
        }
    }

function ls(){
// get stored items from local storage
let storedItems = JSON.parse(localStorage.getItem("calander"));

//Retrieve stored todos from local storage, and update it ot the array
if (storedItems !== null){
    calanders = storedItems;
    }
    //render calanders to the DOM  
    renderCalander();
}

function storeItems() {
    //Stringify and set "items" key in local storage to calanders array
    localStorage.setItem("calanders",JSON.stringify(calanders));
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
    renderCalander();
  });
