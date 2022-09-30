let originalInput;
let convertButton;
let output;

document.addEventListener("DOMContentLoaded", ()=>{
     //ADD OUR DEFERRED CODE HERE
     originalInput = document.getElementById("originalInput");
     convertButton = document.getElementById("convertButton");
     output = document.getElementById("output");

     convertButton.addEventListener("click", ()=>{
        output.value = (Number(originalInput.value) - 32) * (5 / 9)
    });    
});