import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works for group 1!';

  link = "http://www.google.com";

  clicked(){
    console.log("I've been brutally clicked");
    console.log(this.title);
  }

  changeTitle(){
    this.title += "!";
  }
}
