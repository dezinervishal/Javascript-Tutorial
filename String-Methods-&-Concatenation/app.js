const firstName = "Vishal";
const lastName = "Chandola";
const age = 28;
const str = "Hello there my name is vishal";
const tags = 'Web Design,web development,programming';

let val;

val = firstName + lastName;

// Concatination
val = firstName + " " + lastName;

// Apend
val = "Chandola ";
val += "vishal" 

val = "Hello, my name is " + firstName + " and I am " + age;

// Escaping
val = "'That\'s awesome, I can\'t wait";

// Length
val = firstName.length;

// Concat()
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();
val = firstName[0];

// indexOf() 
val = firstName.indexOf('1');
val = firstName.lastIndexOf('2');

// charAt()
val = firstName.charAt('2');

// Get last char
val = firstName.charAt(firstName.length -1);

//Substring()
val = firstName.substring(0, 4);

//slice
val = firstName.slice(0, 4);
val = firstName.slice(-3);

// Split
val = str.split(' ');
val = tags.split(',');

// replace
val = str.replace('vishal', 'Kavya');

// includes()

val = str.includes('True');



console.log(val);