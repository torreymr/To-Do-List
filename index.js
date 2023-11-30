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
    const task = document.createElement("div");
    task.setAttribute("id", "task")
    const checkBox = document.createElement("button");
    const taskName = document.createElement("input");
    const deleteButton = document.createElement("button");

    task.appendChild(checkBox).textContent = "check";
    task.appendChild(taskName).setAttribute("id", "taskName");
    task.appendChild(deleteButton).textContent = "del";

    listTasks.appendChild(task);
};

