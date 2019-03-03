// document.getElementsByClassName

// const item = document.getElementsByClassName('collection-item');
// console.log(item);
// console.log(item[0]);
// item[0].style.color = 'red';
// item[3].textContent = 'Hello World!';

// const listItem = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItem);


// document.getElementByTagName
// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[3].style.color = 'red';
// lis[3].textContent = 'Hello You!';

// // Convert HTML collection into Array

// lis = Array.from(lis);

// lis.reverse();

// lis.forEach(function (li, index) {
//     console.log(li.className);
//     //li.textContent = "Lorem Ipsum";
//     li.textContent = `${index}: Hello`;
// });
// console.log(lis);


// document.querySelectorAll

const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function (item, index) {
    item.textContent = `${index}: Hello World!`
});

const liOdd = document.querySelectorAll('li:nth-child(odd)')
const liEven = document.querySelectorAll('li:nth-child(even)')

liOdd.forEach(function (li, index) {
    li.style.background = '#ccc';
});

// liEven.forEach(function (li, index) {
//     li.style.background = '#aaa';
// });


for (let i = 0; i < liEven.length; i++) {
    liEven[i].style.background = '#aaa';    
}

console.log(items);