class BankAccount {
    constructor(initialBalance) {
        this._balance = initialBalance;
    };

    getBalance() {
        return this._balance;
    };

    deposit(amount) {
        if(amount > 0) {
            this._balance += amount;
        } else {
            console.log("The amonut of a deposit must be greater than 0 ")
        };
    };

    withdraw(amount) {
        if(amount > 0) {
            if(amount <= this._balance) {
                this._balance -= amount;
            } else {
                console.log("Not enough money on a bank account")
            }
        } else {
            console.log("To withdraw money from your account the amount must be greater than 0");
        };
    };

};

const account1 = new BankAccount(1000);

console.log(account1.getBalance()); 

account1.deposit(500);

console.log(account1.getBalance()); 

account1.withdraw(200);

console.log(account1.getBalance()); 