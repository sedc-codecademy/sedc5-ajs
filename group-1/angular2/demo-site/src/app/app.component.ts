import { Component, OnInit } from '@angular/core';
import { Person } from '../entities/person';
import { AppService } from './app.service';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  state: "editing" | "adding";
  person: Person;
  students: Person[];

  constructor(private service: AppService) {
    console.log("constructing component");
  }

  changeName() {
    this.person.firstName = "Weko";
  }

  addPerson(person: Person) {
    this.students.push(person);
    this.person = new Person("", "")
  }

  savePerson(person: Person) {
    this.person = new Person("", "");
    this.state = "adding";
  }

  editStudent(student: Person) {
    this.person = student;
    this.state = "editing";
  }


  ngOnInit() {
    console.log("initializing component");
    this.state = "adding";

    this.service.getPerson().then(person => {
      this.person = person;
      return this.service.getStudents();
    }).then(students => {
      this.students = students;
    })
    // this.person = await service.getPerson();
    // this.students = await service.getStudents();
  }

}

