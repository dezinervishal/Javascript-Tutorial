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
    // Add task event
    form.addEventListener('submit', addTask);
    // Remove Task event
    taskList.addEventListener('click', removeTask);
    // Clear Task Event
    clearBtn.addEventListener('click', clearTasks);
    // Filter Task Event
    filter.addEventListener('keyup', filterTask);
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

    // Clear Input
    taskInput.value = '';

    console.log(li);

    e.preventDefault();
}

// Remove Task
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure?')){
            e.target.parentElement.parentElement.remove();
        }
        
        // console.log(e.target);
    }
    
}

// Clear Task

function clearTasks() {
    //taskList.innerHTML = '';

    // Faster 
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);    
    }

    // https://jsperf.com/innerhtml-vs-removechild/37
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