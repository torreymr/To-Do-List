"use strict";

const listTitleInput = document.getElementById("listTitleInput");
const addTaskButton = document.getElementById("addTask");
const listTasks = document.getElementById("listTasks");
const taskNameInput = document.getElementById("taskName");

listTitleInput.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        listTitleInput.blur();
    }
});




const addTask = function(){
    const svgElement = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
  </svg>`
    const task = document.createElement("div");
    const checkBox = document.createElement("button");
    const taskContent = document.createElement("div");
    const taskName = document.createElement("input");
    const deleteButton = document.createElement("button");
    task.setAttribute("id", "task");
    checkBox.setAttribute("id", "checkbox");

    taskContent.setAttribute("id", "taskContent");

    taskName.setAttribute("id", "taskName");
    taskName.addEventListener("keydown", function(event){
        if(event.key === "Enter"){
            taskName.blur();
            taskName.classList.add("entered");
        }
    });

    deleteButton.innerHTML = svgElement;
    deleteButton.setAttribute("id", "deleteButton");

    task.appendChild(checkBox);
    taskContent.appendChild(taskName);
    taskContent.appendChild(deleteButton);
    task.appendChild(taskContent);
    

    listTasks.appendChild(task);
};

