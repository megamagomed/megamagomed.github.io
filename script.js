// function buttonClick() {
//     console.log('Hello world!')
// }

// let button = document.querySelector('#button');
// button.addEventListener('click', buttonClick)

// let navbar = document.querySelector('#navbar span');
// function buttonClick() {
//     navbar.textContent = 'Did you push the button?'
// }
// let output = document.querySelector('#output');
// let box = document.querySelector('#box');
// box.addEventListener('mousemove', runEvent);

// // function runEvent(event) {
// //     output.innerHTML = '<h3>MouseX ' + event.offsetX + '</h3>' + '<h3>MouseY ' + event.offsetY + '</h3';
// // }

// function runEvent(event) {
//     box.style.backgroundColor = 'rgb(' + event.offsetX + ',' + event.offsetY + ', 40)'
// }

// let input = document.querySelector('input[type="text"]');
// let form = document.querySelector('form');

// input.addEventListener('keydown', runEvent);
// function runEvent(event) {
//     output.innerHTML = '<h4>' + event.target.value + '</h4>'
// }







// box = {
//     props: {offsetX: 10, offsetY: 20},

//     addEventListener: function(event, func) {
//         if (event = 'mousemove') {
//             func(this.props)
//         }
//     }
// }

// box.addEventListener('mousemove', runEvent)

// function runEvent(event) {
//     console.log(event.offsetX);
//     console.log(event.offsetY);
// }



let form = document.querySelector('form');
let items = document.querySelector('#items');
form.addEventListener('submit', addItem);

function addItem(event) {
    event.preventDefault();
    let input = document.querySelector('input[type="text"]').value;

    let li = document.createElement('li');
    li.appendChild(document.createTextNode(input));
    li.className = 'list-group-item';
    items.appendChild(li);
}