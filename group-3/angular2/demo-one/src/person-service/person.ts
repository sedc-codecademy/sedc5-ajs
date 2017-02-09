export class Person {
  firstName: string;
  lastName: string;
  age: number;

  getFullName() {
    return `${this.firstName} ${this.lastName} (${this.age})`
  }
}