"use strict";
const listTitleInput = document.getElementById("listTitle");
const charCount = document.getElementById("charCount");
const currentLength = listTitleInput.value.length;
document.addEventListener("DOMContentLoaded", function(){


    const maxCharacters = 15;

    listTitleInput.addEventListener("input", function(){

        if (currentLength > 0){
            charCount.classList.remove("hidden");
            charCount.textContent = currentLength + "/" + maxCharacters;
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

listTitleInput.addEventListener("click", function(){
    listTitleInput.classList.remove("entered");
    charCount.classList.remove("hidden");
    charCount.textContent = currentLength + "/" + maxCharacters;
});

listTitleInput.addEventListener("blur", function(){
    if (listTitleInput.value.length > 0){
        listTitleInput.classList.add("entered")
    }
    charCount.classList.add("hidden");
})

