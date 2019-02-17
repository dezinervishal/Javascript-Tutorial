// For Loop

for (let i = 0; i < 10; i++) {
    //console.log(i);
    if (i === 2) {
        console.log('2 is my favorite number');
        continue;
    }

    if (i === 5) {
        console.log('Stop the loop');
        break;
    }

    console.log(i);
}


// While Loop

let i = 0;

while (i < 10) {
    console.log('number ' + i);
    i++
}

// Do While Loop

i = 100;

do{
    console.log('number ' + i);
    i++
} 

while (i < 10);


// Loop Through Array

const cars = ['Ford', 'Honda', 'Chevy', 'Toyota'];

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

// ForEach

cars.forEach(function (car) {
    console.log(car);
});

cars.forEach(function (car, index, array) {
    console.log(`${index} : ${car}`);
    console.log(array);
});

// MAP

const users = [
    { id: 1, name:'John' },
    { id: 2, name: 'Ramesh' },
    { id: 3, name: 'Suresh' },
];

const ids = users.map(function (user) {
   return user.id; 
});

console.log(ids);

// For In Loop

const newUser = {
    firstName : 'Deziner',
    lastName : 'Vishal',
    age : 27
}

for (let x in newUser){
    console.log(`${x} : ${newUser[x]}`);
}