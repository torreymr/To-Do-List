"use strict"
const listTitle = document.getElementById("listTitle");

const enterTitle = function(event) {
    if (event.key === "Enter") {
        listTitle.classList.add("entered__title");
        listTitle.blur();
    }
};


const editTitle = function() {
    listTitle.classList.remove("entered__title");
};

listTitle.addEventListener("blur", function(){
    listTitle.classList.add("entered__title");
});