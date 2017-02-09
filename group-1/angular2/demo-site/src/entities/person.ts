export class Person {
  constructor(public firstName: string, public lastName: string, public age?: number) { }

  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}