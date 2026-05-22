// =========================
// SELECT HTML ELEMENTS
// =========================

let taskInput = document.getElementById("taskInput");

let addBtn = document.getElementById("addBtn");

let taskList = document.getElementById("taskList");

let totalCount = document.getElementById("totalCount");

let completedCount = document.getElementById("completedCount");


// =========================
// TASK ARRAY
// =========================

let tasks = [];


// =========================
// ADD TASK FUNCTION
// =========================

function addTask(){

    let taskText = taskInput.value;

    taskText = taskText.trim();

    if(taskText == ""){
        alert("Please enter a task");
        return;
    }

    let taskObject = {
        text: taskText,
        completed: false
    };

    tasks.push(taskObject);

    taskInput.value = "";

    showTasks();
}


// =========================
// SHOW TASKS
// =========================

function showTasks(){

    taskList.innerHTML = "";

    for(let i = 0; i < tasks.length; i++){

        let li = document.createElement("li");

        li.className = "task-item";


        // checkbox
        let checkbox = document.createElement("input");

        checkbox.type = "checkbox";

        checkbox.checked = tasks[i].completed;


        checkbox.addEventListener("change", function(){

            tasks[i].completed = checkbox.checked;

            showTasks();

        });


        // task text
        let span = document.createElement("span");

        span.className = "task-text";

        span.innerText = tasks[i].text;

        if(tasks[i].completed){
            span.classList.add("completed");
        }


        // delete button
        let deleteBtn = document.createElement("button");

        deleteBtn.innerText = "Delete";

        deleteBtn.className = "delete-btn";


        deleteBtn.addEventListener("click", function(){

            tasks.splice(i,1);

            showTasks();

        });


        // append all
        li.appendChild(checkbox);

        li.appendChild(span);

        li.appendChild(deleteBtn);

        taskList.appendChild(li);

    }

    updateCount();

}


// =========================
// UPDATE TASK COUNT
// =========================

function updateCount(){

    totalCount.innerText = "Total Tasks: " + tasks.length;

    let completedTask = 0;

    for(let i = 0; i < tasks.length; i++){

        if(tasks[i].completed){
            completedTask++;
        }

    }

    completedCount.innerText = "Completed: " + completedTask;

}


// =========================
// BUTTON CLICK EVENT
// =========================

addBtn.addEventListener("click", function(){

    addTask();

});


// =========================
// ENTER KEY EVENT
// =========================

taskInput.addEventListener("keypress", function(event){

    if(event.key == "Enter"){

        addTask();

    }

});


// =========================
// FIRST LOAD
// =========================

showTasks();