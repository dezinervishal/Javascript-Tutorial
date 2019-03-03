// document.getElementById()
console.log(document.getElementById('task-title'));

// Get things from the elements
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

const taskTitle = document.getElementById('task-title');

// Change styling
document.getElementById('task-title').style.background = 'red';
document.getElementById('task-title').style.color = '#fff';
document.getElementById('task-title').style.padding = '10px';
// document.getElementById('task-title').style.display = 'none';


// Change Content
// document.getElementById('task-title').textContent = 'Task List';
// document.getElementById('task-title').innerText = 'My Task';
// document.getElementById('task-title').innerHTML = '<span style="color:#d1d1d1">My Task</span>';
taskTitle.textContent = 'Task List';
taskTitle.innerText = 'My Task';
taskTitle.innerHTML = '<span style="color:#d1d1d1">My Task</span>';

// document.querySelector()
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';

document.querySelector('ul li:last-child').style.color = 'blue';
document.querySelector('ul li:nth-child(3)').style.color = '#d1d1d1';
document.querySelector('ul li:nth-child(4)').textContent = 'Hello World!';
document.querySelector('ul li:nth-child(odd)').style.background = '#d1d1d1';
document.querySelector('ul li:nth-child(even)').style.background = 'red';