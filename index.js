"use strict"

const toggleButton = function() {
    const button = document.getElementById("toggleButton");
    button.classList.toggle("pad__checked");
}

const enterPressed = function(event) {
    if (event.key === "Enter") {
        document.getElementById("pad__title").classList.add("enter-pressed");
        document.getElementById("pad__title").blur();
    }
}

const editTitle = function() {
    document.getElementById("pad__title").classList.remove("enter-pressed");
}

