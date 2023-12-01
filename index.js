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
        } else if (currentLength == 0){
            charCount.classList.add("hidden");
        }

    })
})
