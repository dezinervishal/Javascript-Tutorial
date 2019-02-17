// FUNCTION DECLARATION

function greet(firstName = 'John', lastName = 'Doe'){
    // if(typeof firstName === 'undefined'){firstName = 'Deziner'}
    // if(typeof lastName === 'undefined'){lastName = 'Vishal'}
    //console.log('Hello');
    return 'Hello ' + firstName + " " + lastName;
}

// console.log(greet());

// FUNCTION EXPERSIONS

const square = function (x = 3) {
    return x*x;
};

// console.log(square(8));

// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSION- IIFEs

// (function (name) {
//     console.log('Hello ' + name);
// })('Brad')

// PROPERTY METHODS

const todo = {
    add: function () {
        console.log('Add Todo....');
    },
    edit: function (id) {
        console.log(`Edit todo  ${id}`);
    }
}

todo.delete = function () {
    console.log('Delete Todo...')
};

todo.add();
todo.edit(22);
todo.delete();