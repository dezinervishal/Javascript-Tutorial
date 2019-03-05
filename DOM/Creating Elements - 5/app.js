// Create Element 
const li = document.createElement('li');

// Add Class
li.className = 'collection-item';
li.id = 'new-item';

// Add Attribute
li.setAttribute ('title', 'New Item');

// Create text node and append 
li.appendChild(document.createTextNode('Hello World!'));

// Create new link element 
const link = document.createElement('a');

// Add classs
link.className = 'delete-item secondary-content';

// Add icon HTML
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link into li
li.appendChild(link);


// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);


console.log(li);
