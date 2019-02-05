let value;

// Number to String
value = String(555);
value = String(4+4);

// Boolean to string
value = String(true);

// Date to String
value = String(new Date());

// Array to String
value = String([1,2,3,4,5]);

// To String
value = (6).toString();
value = (true).toString();

// String to Number

value = Number('5'); // 5
value = Number(true); // 1
value = Number(false); // 0
value = Number(null); // 0
value = Number('Hello') // NAN
value = Number([1,2,3,4,5]) // NAN


// parsInt

value = parseInt('100.30') // 100
value = parseFloat('100.30') //100.40


// Out put 
console.log(value);
console.log(typeof value);
// console.log(value.length);
// console.log(value.toFixed());
console.log(value.toFixed(2));


// const value1 = 5;
const value1 = String(5);
const value2 = 5;
const sum = Number(value1 + value2);
console.log(sum);
console.log(typeof sum);
