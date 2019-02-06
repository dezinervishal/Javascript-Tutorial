const name = 'John';
const age = 30;
const job = 'Web Developer';
const city = 'Miami';
let html;

// Without Template String (ES5)
html = '<ul><li>Name: ' + name + ' </li><li>Age: ' + age + ' </li><li>Job: ' + job + ' </li><li>City: ' + city +' </li><ul>'

html = '<ul>' + 
            '<li>Name:' + name + '</li>' +
            '<li>Age:' + age + '</li>' +
            '<li>Job:' + job + '</li>' +
            '<li>City:' + city + '</li>' +
        '</ul>'


function hello() {
    return 'hello';
}


// With Template String (ES6)
html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>${2+2}</li>
        <li>${hello()}</li>
        <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
    </ul>
`;


document.body.innerHTML = html;