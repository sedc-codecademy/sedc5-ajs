import { Person } from './person';
import { Injectable } from '@angular/core';

@Injectable()
export class PersonService {
    getInitialPerson(): Promise<Person> {
        let promise = new Promise((resolve, reject) => {
            setTimeout(function () {
                let person = new Person();
                person.firstName = "Wekoslav";
                person.lastName = "Stefanovski";
                person.age = 0x27;

                resolve(person);
            }, 1000);
        });

        return promise;
    }

    getStudents(): Promise<Person[]> {
        let promise = new Promise((resolve, reject) => {
            setTimeout(function () {
                resolve([]);
            }, 1000);
        });

        return promise;
    }
}