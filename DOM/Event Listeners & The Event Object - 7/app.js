// document.querySelector('.clear-tasks').addEventListener('click',function (e) {
//     console.log('Hello World!');
//     // e.preventDefault();
// });


document.querySelector('.clear-tasks').addEventListener('click', onclick);

function onclick(e) {
    // console.log('Clicked');
    let val;

    val = e;

    // Event target Element 
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList;

    // e.target.innerText = 'Helo';s

    // Event Type 
    val = e.type;

    // Timestamp
    val = e.timeStamp;

    // Coords event relative to the window
    val = e.clientY;
    val = e.clientX;
    
    // Coords event relative to the Element
    val = e.offsetY;
    val = e.offsetX;

    console.log(val);
}

