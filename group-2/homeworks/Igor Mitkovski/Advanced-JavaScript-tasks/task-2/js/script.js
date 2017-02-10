class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }
    whoAreYou() {
        return `My name is ${this.name} and I am working in department ${this.department}`;
    }
}
class Manager extends Employee {
    constructor(name, department, employees) {
        super(name, "general");
        this.employees = employees || [];
    }
    fireEmployees(employeeName) {
        for (var i = 0; i < this.employees.length; i++) {
            if (this.employees[i].name === employeeName)
                this.employees.splice(i, 1);
        }
        return this.employees;
    }
}
class SalesPerson extends Employee {
    constructor(name, department, quota) {
        super(name, "sales");
        this.quota = quota;
    }
}
let mirce = new Employee("Mirce", "3D Design");
let igor = new Manager("Igor", mirce);

// igor.employees.push(mirce);
let filip = new Employee("Filip", "Android Developer");
igor.employees.push(filip, mirce);
