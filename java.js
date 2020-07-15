let calanderInput = document.querySelector("#cal-text");
let calanderForm = document.querySelector("#daily-form");
let calanderTime = document.querySelector("#calander-time");

let calanders =[];

ls();

function renderCalander(){
    // Creates a new input for each hour
for (var i = 0; i < calander.length; i++) {
    let calander = calanders[i];
    
    let li = document.createElement("li");
    li.textContent = calander;
    li.setAttribute("data-index", i);
    
    let button = document.createElement("button");
        button.textContent = "Complete";
    
        li.appendChild(button);
        calanderTime.appendChild(li);
        }
    }
