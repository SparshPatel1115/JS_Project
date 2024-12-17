let value = document.getElementById("value")
//value.textContent = 1000

let count = 0

function inc(){
    count += 1
    value.textContent = count
}

function dec(){
    count -= 1
    value.textContent = count
}

function res(){
    count = 0
    value.textContent = count
}