let upper = window.prompt("Enter UpperLimit Number");
let ul = document.getElementById("upperLimit").value =upper;

let lower = window.prompt("Enter LowerLimit Number");
let ll = document.getElementById("lowerLimit").value = lower;

let guess = document.getElementById("guessNumber").value = Math.floor(Math.random()*(ul- ll))


let CGN = document.getElementById("CGN").value


function predict(){
if(CGN === guess){
    let result = document.getElementById("Result").textContent = "Equal";
}else if(CGN >= guess){
    let result = document.getElementById("Result").textContent = "Larger than predictable number";
}else if(CGN <= guess){
    let result = document.getElementById("Result").textContent = "Smaller than predictable number";
}else {
    let result = document.getElementById("Result").textContent = "Not Equal";
}
}