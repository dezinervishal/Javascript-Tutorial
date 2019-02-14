let val;

const today = new Date();
//const birthday = new Date('4-04-1991 11:25:00');
let birthday = new Date('4-04-1991 11:25:00');
birthday = new Date('April 28 1991');
birthday = new Date('4/4/1991');

//val = today;
//val = birthday;

val = today.getDate();
val = today.getDay();
val = today.getMonth();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();
// val = today.getDate;

birthday.setMonth(3);
birthday.setDate(12);
birthday.setFullYear(1991);
birthday.setHours(5);
birthday.setMinutes(35);
birthday.setSeconds(55);

// console.log(today)
// console.log(val)
console.log(birthday);