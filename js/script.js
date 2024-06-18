let number = prompt('Введіть пʼятизначне число');

while (number.length !== 5 || isNaN(number)) {
    alert('Будь ласка, введіть правильне пʼятизначне число');
    number = prompt('Введіть пʼятизначне число');
}

const digits = number.split('').join(' ');
alert(`Розкладене число: ${digits}`);
