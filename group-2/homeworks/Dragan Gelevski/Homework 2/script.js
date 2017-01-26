class Employee {
    constructor( name, department ) {
        this.name = name;
        this.department = department;
    }
    whoAreYou() {
        return `My name is ${this.name} and I am working in department ${this.department}`;
    }
}

class Manager extends Employee {
    constructor( name, employees ) {
        super (name, "general");
        this.employees = employees || [];
    }
    fire(someone) {
        return this.employees = (this.employees).filter(x => x != someone);
    }
}

class SalesPerson extends Employee {
    constructor( name, quota) {
        super (name, "sales");
        this.quota = quota;
    }
}


let srdjo = new Employee("Srdjan", "SEDC");
let drakso = new Employee("Dragan", "SEDC");
let ficho = new SalesPerson("Filip", "250$");
let igeto = new Manager("Igor", [srdjo,drakso,ficho]);

console.log(`Drakso the employee`);
console.log(drakso);
console.log(`Igeto the manager`);
console.log(igeto);
console.log(`Ficho the sales person`);
console.log(ficho);
console.log(`you are fired drakso!`);
igeto.fire(drakso);
console.log(igeto);