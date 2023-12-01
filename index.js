"use strict";


document.addEventListener("DOMContentLoaded", function(){
    const listTitleInput = document.getElementById("listTitle");
    const charCount = document.getElementById("charCount");

    const maxCharacters = 15;

    listTitleInput.addEventListener("input", function(){
        const currentLength = listTitleInput.value.length;
        if (currentLength > 0){
            charCount.classList.remove("hidden");
            charCount.textContent = currentLength + "/" + maxCharacters;
        }

    });
    listTitleInput.addEventListener("keydown", function(event){
        if(event.key === "Enter"){
            listTitleInput.blur();
            listTitleInput.classList.add("entered")
            charCount.classList.add("hidden");
        }
    });
    
    listTitleInput.addEventListener("click", function(){
        const currentLength = listTitleInput.value.length;
        listTitleInput.classList.remove("entered");
        charCount.classList.remove("hidden");
        charCount.textContent = currentLength + "/" + maxCharacters;
    });
    
    listTitleInput.addEventListener("blur", function(){
        if (listTitleInput.value.length > 0){
            listTitleInput.classList.add("entered")
        }
        charCount.classList.add("hidden");
    });
});



