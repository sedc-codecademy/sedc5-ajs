import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstName: string = "Wekoslav";
  lastName: string = "Stefanovski";

  getFullName(){
    return `${this.firstName} ${this.lastName}`
  }
}
