 let tasks = [];


// Get Task
function getTask() {
    let task = document.getElementById("taskInput").value;
    

    if (task){
        let itemResult = {
            id: Math.round(Math.random() * 1000000),
            itemName : task
        };

        tasks.push(itemResult);
        displayTasks();
    }

    else{
        alert("Please enter a task");
    }
}


// Add Task
function addTask() {
    getTask();
}

let listOfTasks = document.getElementById("taskList");
listOfTasks.setAttribute("class", "list-group");

// display task
function displayTasks(filteredTasks = tasks) {
    listOfTasks.innerHTML = "";

    filteredTasks.forEach((task, index) =>  {
        let newTask = document.createElement("li");
        newTask.setAttribute("id", index);
        newTask.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center");
        listOfTasks.appendChild(newTask);

        newTask.innerHTML = `
            <div>${task.itemName}</div>
            <div>
                <button class="btn btn-danger" onclick="deleteTask(${index})">Delete</button>
                <button class="btn btn-warning" onclick="editTask(${index})">Edit</button>
            </div>
        `;

        
    })
}

//delete task
function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}
//edit task
function editTask(index) {
    let listTask = document.getElementById(index);
    const item = tasks[index];

    if (listTask) {
        listTask.innerHTML = `
        <input type="text" class="form-control" id="editInput${index}" placeholder="Enter a new task" value="${item.itemName}">
        <button class="btn btn-success" onclick="updateTask(${index})">Update</button>
    `    
    }
    
}
//update task
function updateTask(index) {
    const newValue = document.getElementById(`editInput${index}`).value;

    if (newValue) {
        tasks[index].itemName = newValue;
        displayTasks();

    }

    else{
        alert("Please enter a task");
    }
}

// filter task

function filterTask() {
    const searchInput = document.getElementById("searchInput").value;
    const filteredTasks = tasks.filter(task =>
        task.itemName.toLowerCase().includes(searchInput)
    )

    displayTasks(filteredTasks);
    
}