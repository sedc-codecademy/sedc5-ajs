class Person {

    constructor(public firstName: string, public lastName: string, public age? : number){}

    public getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    public display(){
        if (this.age)
            return `${this.getFullName()} - ${this.age}`;
        else
            return this.getFullName();
    }

}

class Employee extends Person{
    constructor(public empId: string, firstName: string, lastName: string, age? : number){
        super(firstName, lastName, age);
    }

    public getFullName(){
        return `#${this.empId}: ${this.firstName} ${this.lastName}`;
    }
}

let weko = new Person("Wekoslav", "Stefanovski", 0x27);
let ines = new Person("Ines", "Rasic");
let dejan = new Employee("A001", "Dejan", "Petreski");

let people: Person[] = [weko, ines, dejan];

console.log(people.map(p => p.display()));