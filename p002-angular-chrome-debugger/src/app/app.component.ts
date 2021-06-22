import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'p002-angular-chrome-debugger';

  constructor(){
    console.log("App Component is being initialized.....");
    console.log("Welcome");
  }
}
