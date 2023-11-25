"use strict"


const enterTitle = function(event) {
    if (event.key === "Enter") {
        document.getElementById("listTitle").classList.add("entered__title");
        document.getElementById("listTitle").blur();
    }
}

const editTitle = function() {
    document.getElementById("listTitle").classList.remove("entered__title");
}