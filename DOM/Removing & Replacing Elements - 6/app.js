// Replace Element


// Create Element 
const newHeading = document.createElement('h2');

// Add id 
newHeading.id = 'task-title';

console.log(newHeading);

// New text Node
newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heading
const oldHeading = document.getElementById('task-title')

// Parent 
const cardAction = document.querySelector('.card-action');

// Replace 
cardAction.replaceChild(newHeading, oldHeading);

// Remove Element 
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item
lis[0].remove();

// Remove Child Element
list.removeChild(lis[3]);

// Classes in Attributes
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0]; 

let val;


// Classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val = link;

// Attribute

val = link.getAttribute('href');
val = link.setAttribute('href', 'https://www.google.com');
link.setAttribute('title', 'Google');
val = link.hasAttribute('title');
link.removeAttribute('title');
val = link;



console.log(val);


//console.log(firstLi.children[0]);

//console.log(newHeading);

