import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tut4';
  data = "Code Step by Step";
  getValue()
  {
    return "getValue Function"
  }
}
