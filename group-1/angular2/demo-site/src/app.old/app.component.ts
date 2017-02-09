import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  state: "editing" | "adding";

  person: Person;
  students: Person[];

  constructor() {
    console.log("constructing component");
  }

  changeName() {
    this.person.firstName = "Weko";
  }

  addPerson() {
    this.students.push(this.person);
    this.person = new Person("", "")
  }

  editStudent(student: Person) {
    this.person = student;
    this.state = "editing";
  }

  savePerson() {
    this.person = new Person("", "");
    this.state = "adding";
  }

  isAdding() {
    return this.state === "adding";
  }

  isEditing(){
    return this.state === "editing";
  }

  ngOnInit() {
    console.log("initializing component");
    this.person = new Person("Wekoslav", "Stefanovski", 0x27);
    this.students = [
      new Person("Nenad", "Trenchevski"),
      new Person("Aneta", "Maneva")
    ];
    this.state = "adding";
  }

}

export class Person {
  constructor(public firstName: string, public lastName: string, public age?: number) { }

  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}