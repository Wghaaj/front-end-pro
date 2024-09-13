class Student {
    constructor(forename, surname, yearOfBirth) {
        this._forename = forename;
        this._surname = surname;
        this._yearOfBirth = yearOfBirth;
        this._marks = [];
        this._presence = new Array(25).fill(null); 
    };

    get forename() {
        return this._forename;
    };

    get surname() {
        return this._surname;
    };

    get yearOfBirth() {
        return this._yearOfBirth;
    };

    get age() {
        return new Date().getFullYear() - this._yearOfBirth;
    };

    get fullname() {
        return this._forename + " " + this._surname;
    };

    addMark(mark) {
        if (this._marks.length < 25 && mark >= 0 && mark <= 100) {
            this._marks.push(mark);
        } else {
            console.log("Cannot add a mark. The mark should be between 0 and 100 or the array is full");
        }
    };

    get avgMark() {
        if (this._marks.length === 0) return 0;
        const sum = this._marks.reduce((acc, mark) => acc + mark, 0);
        return sum / this._marks.length;
    }

    present() {
        const index = this._presence.findIndex(value => value === null);
        if (index !== -1) {
            this._presence[index] = true;
        } else {
            console.log("All classes are already marked ");
        }
    }

    absent() {
        const index = this._presence.findIndex(value => value === null);
        if (index !== -1) {
            this._presence[index] = false;
        } else {
            console.log("All classes are already marked");
        }
    }

    get avgAttendance() {
        const attendedClasses = this._presence.filter(value => value === true).length;
        const totalClasses = this._presence.filter(value => value !== null).length;
        return totalClasses ? attendedClasses / totalClasses : 0;
    }

    summary() {
        const avgMark = this.avgMark;
        const avgAttendance = this.avgAttendance;

        if (avgMark > 90 && avgAttendance > 0.9) {
            return "Well done!";
        } else if (avgMark > 90 || avgAttendance > 0.9) {
            return "Good but could be better";
        } else {
            return "Bad!";
        }
    }
}


const student1 = new Student("Steven", "Roberts", 2000);
student1.addMark(95);
student1.addMark(87);
student1.present();
student1.present();
student1.absent();
console.log(`Average mark: ${student1.avgMark}`);
console.log(`Average attendence: ${student1.avgAttendance}`);
console.log(`Summary: ${student1.summary()}`);

const student2 = new Student("Mariia", "Scott", 2005);
student2.addMark(78);
student2.addMark(88);
student2.absent();
student2.absent();
console.log(`Average mark: ${student2.avgMark}`);
console.log(`Average attendance: ${student2.avgAttendance}`);
console.log(`Summary: ${student2.summary()}`);
