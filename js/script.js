class Coach {
    constructor(name, specialization, rating) {
        this._name = name;
        this._specialization = specialization;
        this._rating = rating;
    };

    displayInfo() {
        console.log(`Coach: ${this._name}, Specialization: ${this._specialization}, Rating: ${this._rating}`);
    };
}


const coach1 = new Coach('John Doe', 'Fitness', 4.7);
const coach2 = new Coach('Alice Smith', 'Yoga', 4.9);

coach1.displayInfo(); 
coach2.displayInfo(); 

