"use strict"
const listTitle = document.getElementById("listTitle");
const warningMessage = document.getElementById("char-limit-warning");
const checkButton = document.getElementById("checkTask");
const taskName = document.getElementById("taskName");

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


listTitle.addEventListener("input", function(){
    const maxLength = parseInt(listTitle.getAttribute("maxlength"));
    if (listTitle.value.length >= maxLength){
        warningMessage.textContent = "Character limit exceeded!";
    } else {
        warningMessage.textContent = "";
    }
});

checkButton.addEventListener("click", function(){
    checkButton.classList.toggle("checked");
})

taskName.addEventListener("blur", function(){
    taskName.classList.add("entered_name");
});

const enterTask = function(event){
    if (event.key === "Enter") {
        taskName.classList.add("entered_name");
        taskName.blur();
    }
}

taskName.addEventListener("click", function(){
    taskName.classList.remove("entered_name")
})