"use strict";

const listTitleInput = document.getElementById("listTitleInput");
const addTaskButton = document.getElementById("addTask");
const listTasks = document.getElementById("listTasks");

listTitleInput.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        listTitleInput.blur();
    }
});


const addTask = function(){
    console.log("Button Clicked!")
    const task = document.createElement("div");
    const checkBox = document.createElement("button");
    const taskName = document.createElement("input");
    const deleteButton = document.createElement("button");

    task.appendChild(checkBox);
    task.appendChild(taskName);
    task.appendChild(deleteButton);

    listTasks.appendChild(task);
};

