const redBtn = document.getElementById('red-button')
const greenBtn = document.getElementById('green-button')
const text = document.getElementById('text')
let counter = 0

redBtn.addEventListener('click', changeToRed);
greenBtn.addEventListener('click', changeToGreen)


function changeToRed() {
    counter++
    if(counter === 1) {
     text.style.color = 'red'
    }
 
    if(counter === 2) {
     text.style.color = 'black';
     counter = 0;
    }
}

function changeToGreen() {
    counter++
    if(counter === 1) {
     text.style.color = 'green'
    }
 
    if(counter === 2) {
     text.style.color = 'black';
     counter = 0;
    }
}