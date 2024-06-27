const num = parseInt(prompt("Введіть ціле число:"));

if (isNaN(num)) {
    console.log("Будь ласка, введіть коректне ціле число.");
} else if (num <= 1) {
    console.log(`${num} не є простим числом.`);
} else {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(`${num} є простим числом.`);
    } else {
        console.log(`${num} не є простим числом.`);
    }
}
