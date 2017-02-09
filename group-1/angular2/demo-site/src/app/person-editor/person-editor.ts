import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../../entities/person';

@Component({
    selector: 'person-editor',
    templateUrl: './person-editor.html'
})
export class PersonEditorComponent implements OnInit {
    @Input() person: Person;

    @Input() state: "editing" | "adding";

    @Output() onAdded: EventEmitter<Person> = new EventEmitter<Person>();
    @Output() onSaved: EventEmitter<Person> = new EventEmitter<Person>();

    isAdding() {
        return this.state === "adding";
    }

    isEditing() {
        return this.state === "editing";
    }

    addPerson() {
        this.onAdded.emit(this.person);
    }

    savePerson() {
        this.onSaved.emit(this.person);
        this.state = "adding";
    }

    ngOnInit(){
        //this.state = "adding";
    }
}