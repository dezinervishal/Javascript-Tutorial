// Basic 

// if (something) {
//     do something
// } else {
//     do something else
// }


const id = 100;
//const id = '100';

// Equal to

// if (id == 100) {
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// // Not Equalto
// if (id != 101) {
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// // Equal to value & Type
// if (id === 100){
//     console.log('CORRECT');
// } else{
//     console.log('INCORRECT');
// }

// // Equal to value & Type
// if (id !== 100) {
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// } 

// Test if UNDEFINED
// if(typeof id !== 'undefined'){
//     console.log(`The ID ${id}`);
// } else{
//     console.log('No ID');
// }

// Greater or less than

if (id <= 200){
    console.log('CORRECT');
} else{
    console.log('INCORRECT');
}

// If else

const color = 'yellow';

// if (color === 'red'){
//     console.log('Color is Red');
// } else if (color === 'blue'){
//     console.log('Color is Blue');
// } else {
//     console.log('Color is not Red or Blue');
// }


// Logical Operators

const name = 'Vishal';
const age = 27;


// AND &&
if (age > 0 && age < 12){
    console.log(`${name} is a child`);
} else if (age >=13 && age <= 19){
    console.log(`${name} is a teenager`);
} else{
    console.log(`${name} is a adult`);
}


// OR ||
if(age < 16 || age > 65){
    console.log(`${name} can not run in race`);
} else {
    console.log(`${name} is registered for the race`);
}

// TERNARY OPERATOR
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// without Braces
if(id === 100)
    console.log('CORRECT');
else
    console.log('INCORRECT');