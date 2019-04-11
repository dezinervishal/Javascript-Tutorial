// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-task');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listners
loadEventListners();

// Load all event listners
function loadEventListners() {
    // DOM load event
    document.addEventListener('DOMContentLoaded', getTasks);
    
    // Add task event
    form.addEventListener('submit', addTask);
    // Remove Task event
    taskList.addEventListener('click', removeTask);
    // Clear Task Event
    clearBtn.addEventListener('click', clearTasks);
    // Filter Task Event
    filter.addEventListener('keyup', filterTask);

}

// Get Task from Local Storage
function getTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task){
        // create li element
        const li = document.createElement('li');
        //Add a class 
        li.className = 'collection-item';
        // Create Text node and append to li
        li.appendChild(document.createTextNode(task));
        // Create new link element
        const link = document.createElement('a');
        // Add class 
        link.className = 'delete-item secondary-content';
        // Add icon html
        link.innerHTML = '<i class="fa fa-remove"></i>'
        // Append the link to the li
        li.appendChild(link);

        // Append new li to the ul
        taskList.appendChild(li);
    });
}

// Add Task
function addTask(e) {
    if (taskInput.value === '') {
        //alert('Add a task');
    }

    // create li element
    const li = document.createElement('li');
    //Add a class 
    li.className = 'collection-item';
    // Create Text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link element
    const link = document.createElement('a');
    // Add class 
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>'
    // Append the link to the li
    li.appendChild(link);

    // Append new li to the ul
    taskList.appendChild(li);

    // Store in Local Storage
    storageTaskInLocalStorage(taskInput.value);

    // Clear Input
    taskInput.value = '';

    console.log(li);

    e.preventDefault();
}

// Store Task
function storageTaskInLocalStorage(task) {
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove Task
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure?')){
            e.target.parentElement.parentElement.remove();
            
            // Remove task from Local Storage
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);

        }   
        // console.log(e.target);
    }   
}

// Remove from Local Storage

function removeTaskFromLocalStorage(taskItem) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task, index) {
        if(taskItem.textContent === task){
            tasks.splice(index, 1);
        } 
    });
    // console.log(taskItem);

    localStorage.setItem('tasks', JSON.stringify(tasks))
}

// Clear Task

function clearTasks() {
    //taskList.innerHTML = '';

    // Faster 
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);    
    }

    // https://jsperf.com/innerhtml-vs-removechild/37

    // Clear from Local Storage
    clearTasksFromLocalStorage();
}

// Clear Task from Local Storage
function clearTasksFromLocalStorage() {
    localStorage.clear();
}


// Filter Task

function filterTask(e){
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        }   else{
            task.style.display = 'none';
        }
    });
    // console.log(text);
}