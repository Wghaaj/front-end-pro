const parent = document.getElementById('parent');
const firstBtn = document.getElementById('btn-1');
const secondBtn = document.getElementById('btn-2');
const thirdBtn = document.getElementById('btn-3');

parent.addEventListener('click', function(event) {
   if(event.target.tagName === "BUTTON") {
      const clickItem = event.target.textContent;
      alert('Pressed on the button: ' + clickItem)
   }
})