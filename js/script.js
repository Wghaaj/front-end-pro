const buttonEnter = document.getElementById('button-enter');
const buttonOpen = document.getElementById('button-open');
let userUrl = '';

buttonEnter.addEventListener('click', () => {
   userUrl = prompt('Enter URL')
});

buttonOpen.addEventListener('click', () => {
   if(userUrl) {
    window.open(userUrl, '_blank')
   } else {
    alert('Please enter URL first')
   };
})

