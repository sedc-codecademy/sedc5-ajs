import { Component, OnInit } from '@angular/core';
import { Person } from '../person-service/person';
import { PersonService } from '../person-service/person-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  person: Person;
  students: Person[];
  state: State;

  constructor(private service: PersonService){
    console.log("constructing the component");
  }

  addStudent(person){
    this.students.push(person);
    this.person = new Person();
  }

  saveStudent(person){
    this.person = new Person();
    this.state = State.Adding;
  }


  editStuden(student: Person){
    this.person = student;
    this.state = State.Editing;
  }


  isEditing(){
    return this.state === State.Editing;
  }

  isAdding(){
    return this.state === State.Adding;
  }

  hasPerson(){
    return !!this.person;
  }

  ngOnInit(){
    console.log("initializing the component");

    this.service.getInitialPerson().then(person => {
      console.log("loaded person");
      this.person = person;
      return this.service.getStudents();
    }).then(persons => {
      console.log("loaded students");
      this.students = persons;
    })
    this.state = State.Adding;
  }
}

export enum State {
  Editing = 0,
  Adding = 1
}