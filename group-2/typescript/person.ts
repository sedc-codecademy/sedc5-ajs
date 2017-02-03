class Person {
    constructor(public firstName: string, public lastName: string, public age?: number) {
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    displayAge() {
        if (this.age) {
            return "No age entered";
        }
        return this.age;
    }
}

let weko = new Person("Wekoslav", "Stefanovski", 0x27);
let violeta = new Person("Violeta", "Zhabeva");

console.log(weko.getFullName());
console.log(violeta.getFullName());

enum WorldSide {
    East, West, North, South
}

class Employee extends Person {
    constructor(public employeeId: number, firstName: string, lastName: string, age?: number) {
        super(firstName, lastName, age);
    }

    display() {
        return `#${this.employeeId}: ${this.getFullName()}`;
    }
}

let srdjan = new Employee(111, "Srdjan", "Rakic", 26);
console.log(srdjan.display());