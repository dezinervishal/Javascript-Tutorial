let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// Get Child Nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;

// 1 - Element 
// 2 - Attribute (Depricated)
// 3 - Text Node
// 8 - Comment 
// 9 - Document itself

// 10 - Doctype  

// Get Children element Nodes
val = list.children;
val = list.children[0];
list.children[1].textContent = 'Hello World!';

// Children of Children
list.children[3].children[0].id = 'testLink';
val = list.children[3].children[0];

// First Child
val = list.firstChild;
val = list.firstElementChild;

// Last Child
val = list.lastChild;
val = list.lastElementChild;

// Count Child Element
val = list.childElementCount;

// Get Parent Node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get Next Sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;

// Get Previous Sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;

console.log(val);