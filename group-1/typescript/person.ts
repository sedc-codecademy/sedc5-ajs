// function Person(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// Person.prototype.getFullName = function(){
//     return this.firstName + " " + this.lastName;
// }

class Person {

    constructor(public firstName: string, public lastName: string, public age?: number) { }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    display() {
        if (this.age)
            return `${this.getFullName()} (${this.age})`;
        else
            return `${this.getFullName()} (no age info)`;
    }

}

class Employee extends Person {
    constructor(public empId: string, firstName: string, lastName: string, age?: number) {
        super(firstName, lastName, age);
    }

    getFullName() {
        return `#${this.empId}: ${this.firstName} ${this.lastName}`;
    }
}

let weko = new Person("Wekoslav", "Stefanovski", 0x27);
console.log(weko.display());

let aneta = new Person("Aneta", "Maneva")
console.log(aneta.display())

let dejan = new Employee("A007", "Dejan", "Keroski", 29)
console.log(dejan.display())

console.log("----------------")

let persons: Person[] = [weko, aneta, dejan];

persons.forEach(p => console.log(p.display()));