var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Person = (function () {
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    Person.prototype.displayAge = function () {
        if (this.age) {
            return "No age entered";
        }
        return this.age;
    };
    return Person;
}());
var weko = new Person("Wekoslav", "Stefanovski", 0x27);
var violeta = new Person("Violeta", "Zhabeva");
console.log(weko.getFullName());
console.log(violeta.getFullName());
var WorldSide;
(function (WorldSide) {
    WorldSide[WorldSide["East"] = 0] = "East";
    WorldSide[WorldSide["West"] = 1] = "West";
    WorldSide[WorldSide["North"] = 2] = "North";
    WorldSide[WorldSide["South"] = 3] = "South";
})(WorldSide || (WorldSide = {}));
var Employee = (function (_super) {
    __extends(Employee, _super);
    function Employee(employeeId, firstName, lastName, age) {
        var _this = _super.call(this, firstName, lastName, age) || this;
        _this.employeeId = employeeId;
        return _this;
    }
    Employee.prototype.display = function () {
        return "#" + this.employeeId + ": " + this.getFullName();
    };
    return Employee;
}(Person));
var srdjan = new Employee(111, "Srdjan", "Rakic", 26);
console.log(srdjan.display());
var persons = [];
persons.push(weko);
persons.push(violeta);
persons.push(srdjan);
console.log(persons.map(function (p) { return p.getFullName(); }));
