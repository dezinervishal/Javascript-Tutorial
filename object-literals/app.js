const person = {
    firstName: 'Deziner',
    lastName: 'Vishal',
    age: 27,
    email: 'test@gmail.com',
    hobbies: ['Music', 'Sports'],
    address: {
        city: 'Dehradun',
        state: 'Uttarakhand',
        // country: 'India',
        // pincode: 248001,
    },
    getBirthYear: function(){
        return 2018 - this.age;
    }

}

let val;

val = person;

// Get Specific value
val = person.firstName;
val = person['firstName'];
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();


console.log(val)


const people = [
    { name: 'John', age: 30 },
    { name: 'Luice', age: 27 },
    { name: 'Taurus', age: 28 },
    { name: 'Maria', age: 35 },
    { name: 'Ponting', age: 58 },

]

for(let i = 0; i < people.length; i++){
    console.log(people[i].name);
    console.log(people[i].age);
}