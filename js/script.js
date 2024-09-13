class Calculator {
    constructor() {

    }

    add(firstNum, secondNum) {
        return firstNum + secondNum;
    };

    subtract(firstNum, secondNum) {
        return firstNum - secondNum;
    };

    multiply(firstNum, secondNum) {
        return firstNum * secondNum;
    };

    divide(firstNum, secondNum) {
        if(firstNum === 0 || secondNum === 0) {
            alert('Error. Cannot divide by 0');
        }

        return firstNum / secondNum;
    };
};

const calc = new Calculator();

console.log(calc.add(5, 3));       
console.log(calc.subtract(10, 4)); 
console.log(calc.multiply(3, 6));  
console.log(calc.divide(8, 2));   
console.log(calc.divide(8, 0)); 

