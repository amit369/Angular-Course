import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'send data from parent to child';
  data = 10;

  updateChild()
  {
    this.data = Math.floor(Math.random()*10);
  }
}
