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
        }

    });
    listTitleInput.addEventListener("keydown", function(event){
        if(event.key === "Enter"){
            listTitleInput.blur();
            listTitleInput.classList.add("entered")
            charCount.classList.add("hidden");
        }
    });
    
    listTitleInput.addEventListener("click", function(){
        const currentLength = listTitleInput.value.length;
        listTitleInput.classList.remove("entered");
        charCount.classList.remove("hidden");
        charCount.textContent = currentLength + "/" + maxCharacters;
    });
    
    listTitleInput.addEventListener("blur", function(){
        if (listTitleInput.value.length > 0){
            listTitleInput.classList.add("entered")
        }
        charCount.classList.add("hidden");
    });
});

document.getElementById("newTask").addEventListener("click",function(){
    const task = document.createElement("div");
    task.setAttribute("id", "task");
    
    const checkTab = document.createElement("button");
    checkTab.setAttribute("id", "checkTab");

    const taskNameContainer = document.createElement("div");
    taskNameContainer.setAttribute("id", "taskNameContainer");

    const taskNameInput = document.createElement("input");
    taskNameInput.setAttribute("id", "taskName");

    taskNameInput.addEventListener("keydown", function(event){
        if(event.key === "Enter"){
            task.classList.add("created");
            taskNameInput.classList.add("created")
            taskNameInput.blur();
        }
    })

    const deleteTaskButton = document.createElement("button");
    deleteTaskButton.setAttribute("id", "deleteTask");

    const deleteTaskIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
  </svg>`

    task.appendChild(checkTab);
    task.appendChild(taskNameContainer);
    taskNameContainer.appendChild(taskNameInput);
    taskNameContainer.appendChild(deleteTaskButton);
    deleteTaskButton.innerHTML = deleteTaskIcon;
    document.getElementById("listTasksContainer").appendChild(task);
});



