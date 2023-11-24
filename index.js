"use strict"

const toggleButton = function() {
    const button = document.getElementById("toggleButton");
    button.classList.toggle("pad__checked");
}

const enterPressedTitle = function(event) {
    if (event.key === "Enter") {
        document.getElementById("pad__title").classList.add("enter-pressed");
        document.getElementById("pad__title").blur();
    }
}

const editTitle = function() {
    document.getElementById("pad__title").classList.remove("enter-pressed");
}

const taskCreated = function(event){
if (event.key === "Enter") {
    document.getElementById("task__name").classList.add("enter-pressed");
    document.getElementById("task__name").blur();
    document.getElementById("deleteButton").classList.add("delete__button");
}}

const editTask = function (){
    document.getElementById("task__name").classList.remove("enter-pressed");
}
