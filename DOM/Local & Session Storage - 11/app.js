// Set Local Storage Item

// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');

// Set Session Storage Item
// sessionStorage.setItem('name', 'Beth');

// remove from storage
// localStorage.removeItem('name');

// Get from storage

// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');


// // clear local storage
// localStorage.clear();

// console.log(name, age);

document.querySelector('form').addEventListener('submit', function(e){
    const task = document.getElementById('task').value;
    // localStorage.setItem('task', tasks);
    
    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    alert('task saved');
    //console.log(task);
    e.preventDefault();
});


const tasks = JSON.parse(localStorage.getItem('tasks'));
tasks.forEach(function (task){
    console.log(task)
});