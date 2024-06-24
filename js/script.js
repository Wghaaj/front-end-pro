function isThreeDigitNumber(num) {
    return num >= 100 && num <= 999;
}

function checkDigits(num) {
    const digits = num.toString().split('');
    const digit1 = digits[0];
    const digit2 = digits[1];
    const digit3 = digits[2];

    const allSame = (digit1 === digit2) && (digit2 === digit3);
    const anySame = (digit1 === digit2) || (digit2 === digit3) || (digit1 === digit3);

    return {
        allSame: allSame,
        anySame: anySame
    };
}

let number;
while (true) {
    number = prompt("Please enter a three-digit number:");
    if (number !== null && isThreeDigitNumber(parseInt(number))) {
        break;
    }
    alert("Invalid input. Please enter a three-digit number.");
}

const result = checkDigits(number);

if (result.allSame) {
    alert("All digits are the same.");
} else if (result.anySame) {
    alert("There are some same digits.");
} else {
    alert("All digits are different.");
}