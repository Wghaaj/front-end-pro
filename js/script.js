let num = parseInt(prompt("Введіть ціле число:"));

while (isNaN(num)) {
    alert("Будь ласка, введіть коректне ціле число.");
    num = parseInt(prompt("Введіть ціле число:"));
} 
if (num <= 1) {
    alert(`${num} не є простим числом.`);
} else {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        alert(`${num} є простим числом.`);
    } else {
        alert(`${num} не є простим числом.`);
    }
}
