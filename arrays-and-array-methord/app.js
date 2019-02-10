// Create Some Arrays
const numbers = [34,31,39,55,66,77,88,99,100];
const number2 = new Array (22,45,66,77,88,49,99);
const fruit = ['Apple', 'Banana', 'Oriange', 'Mango', 'Papaya'];
const mixed = [22, 'Hello', true, undefined, null, {a:1,b:2}, new Date()];

// console.log(mixed);

let val;


// Get array length
val = numbers.length;

// Check if is array
val = Array.isArray(numbers);

// Get a single value 
val = numbers[3];
val = numbers[0];

// Insert into array
numbers[2] = 80;

// Find index of value
val = numbers.indexOf(66);

// Mutating Arrays

// Add on to end
numbers.push(300);
// Add on to Start
numbers.unshift(120);
// Take of from end
numbers.pop();
// Take of from Start
numbers.shift();
// Splice values
numbers.splice(1,2);
// Reverse
numbers.reverse();
// Concatenate array
val = numbers.concat(number2);
// Sorting Arrays
val = fruit.sort();
val =numbers.sort();

// Use the "Compare function"
val = numbers.sort(function (x, y) {
    return x - y;
})

// Reverse Sort
val = numbers.sort(function (x, y) {
    return y - x;
})


// Find 
function under50(num) {
    return num < 50;
}

val = numbers.find(under50);



console.log(numbers);
console.log(val);