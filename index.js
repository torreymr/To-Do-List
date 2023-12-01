"use strict";
const listTitleInput = document.getElementById("listTitle");
const charCount = document.getElementById("charCount");

document.addEventListener("DOMContentLoaded", function(){


    const maxCharacters = 15;

    listTitleInput.addEventListener("input", function(){
        const currentLength = listTitleInput.value.length;
        if (currentLength > 0){
            charCount.classList.remove("hidden");
            charCount.textContent = currentLength + "/" + maxCharacters;
        } else if (currentLength == 0){
            charCount.classList.add("hidden");
        }

    })
});

listTitleInput.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        listTitleInput.blur();
        listTitleInput.classList.add("entered")
        charCount.classList.add("hidden");
    }
});

