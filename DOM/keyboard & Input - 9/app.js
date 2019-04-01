const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');
// Clear Input
taskInput.value = '';

// form.addEventListener('submit', runEvent);


// Keydown
// taskInput.addEventListener('keydown', runEvent);

// Keyup
// taskInput.addEventListener('keyup', runEvent);

// Key Press
// taskInput.addEventListener('keypresss', runEvent);

// Focus
// taskInput.addEventListener('focus', runEvent);

// Blur
// taskInput.addEventListener('blur', runEvent);

// Cut
// taskInput.addEventListener('cut', runEvent);

// Paste
// taskInput.addEventListener('paste', runEvent);

// Input
// taskInput.addEventListener('input', runEvent);

// change 
select.addEventListener('change', runEvent);

function runEvent(e) {
    console.log(`Event Type: ${e.type}`);

    console.log(e.target.value);

    // heading.innerText = e.target.value;
    // Get Input Value
    // console.log(taskInput.value);
    // e.preventDefault();
}