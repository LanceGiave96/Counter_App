
let count=0

function increment()
{   
    let countEl = document.getElementById("count-el") 
    count+= 1
    countEl.textContent = count
}

function save()
{   
    let saveEl = document.getElementById("save-el")
    let countStr = count + " - "
    saveEl.textContent += " " + countStr

    let countEl = document.getElementById("count-el") 
    count=0
    countEl.textContent = count
}
