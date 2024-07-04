function promptForNumber() {
    let number = null;
  
    for (let i = 0; i < 10; i++) {
      number = prompt("Введіть число більше 100:");
  
      if (number === null) {
        break;
      }
  
      number = Number(number);
  
      if (number > 100) {
        break;
      }
    }
  
    console.log(`Останнє введене число: ${number}`);
  }
  
  promptForNumber();
