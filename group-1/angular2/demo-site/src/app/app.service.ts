import { Person } from '../entities/person';

export class AppService {
    
    constructor(){}

    getPerson(): Promise<Person> {
        let promise = new Promise((resolve, reject) => {
            setTimeout(function () {
                console.log("returning person");
                let person = new Person("Wekoslav", "Stefanovski", 0x27);
                resolve(person);
            }, 1000);
        });

        return promise;
    }

    getStudents(): Promise<Person[]> {
        let promise = new Promise((resolve, reject) => {
            setTimeout(function () {
                console.log("returning students");
                resolve([
                    new Person("Nenad", "Trenchevski"),
                    new Person("Aneta", "Maneva")
                ]);
            }, 1000);
        });

        return promise;
    }
}