
document.addEventListener("DOMContentLoaded", ()=>{
    //ADD OUR DEFERRED CODE HERE

    //FIND ALL INPUTS
    const inputList = document.getElementsByTagName("input")
    //IF THERE ARE ANY
    if(inputList.length > 0){
        // SET FOCUS TO THE FIRST ONE
        inputList[0].focus()
    }

    });