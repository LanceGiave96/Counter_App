
//Setting variables
let count=0
let countEl = document.getElementById("count-el")
let incremenBtn = document.getElementById("increment-btn")
let clearBtn = document.getElementById("clear-btn")
let saveBtn = document.getElementById("save-btn")
let saveEl = document.getElementById("save-el")

//Setting events
incremenBtn.addEventListener("click",increment)
clearBtn.addEventListener("click",clear)
saveBtn.addEventListener("click",save)

//Setting callback functions
function increment(){    
    count+= 1
    countEl.textContent = count
}

function clear(){
    saveEl.textContent = "Previous entries: "
}

function save(){   
    let countStr = count
    if(saveEl.textContent === "Previous entries: ")
        saveEl.textContent += " " + countStr
    else    
    saveEl.textContent += " - " + countStr
    count = 0
    countEl.textContent = count
}
