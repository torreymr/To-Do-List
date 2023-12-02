"use strict";

const activeInput = function(inputElement){
    const defaultInputBG = "rgba(120, 120, 120, 0.3)";
    const activeInputBG = "rgba(120, 120, 120, 0.1)";

    const defaultInputC = "rgba(191, 191, 191, .1)";
    const enteredInputC = "rgba(191, 191, 191, 1)";

    inputElement.style.color = defaultInputC;
    inputElement.style.backgroundColor = activeInputBG;

    inputElement.addEventListener("blur", function(){
        const inputElementLength = inputElement.value.length; 
        if (inputElementLength === 0){
            inputElement.style.backgroundColor = defaultInputBG;
        } else {
            inputElement.style.color = enteredInputC;
        }
    });


    inputElement.addEventListener("keydown", function(event){

        const inputElementLength = inputElement.value.length; 

        if (event.key  === "Enter") {
            if (inputElementLength > 0) {
                inputElement.style.color = enteredInputC;
            } else {
                inputElement.style.color = defaultInputC;
            }
        }
    })


};



