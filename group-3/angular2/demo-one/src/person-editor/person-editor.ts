import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'person-editor',
    templateUrl: './person-editor.html'
})
export class PersonEditorComponent implements OnInit {
    @Input() person: any;
    @Input() state: any;
    @Output() onAdded: EventEmitter<any> = new EventEmitter();
    @Output() onSaved: EventEmitter<any> = new EventEmitter();

    isEditing() {
        return this.state === 0;
    }

    isAdding() {
        return this.state === 1;
    }

    addStudent() {
        this.onAdded.emit(this.person);
    }

    saveStudent() {
        this.onAdded.emit(this.person);
    }


    ngOnInit() {

    }

}