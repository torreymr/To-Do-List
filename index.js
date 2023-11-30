"use strict";

const listTitleInput = document.getElementById("listTitleInput");

listTitleInput.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        listTitleInput.blur();
    }
})