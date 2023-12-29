import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-driven-form';
  displayData(form : NgForm)
  {
    console.log(form);
  }
  userLogin(form : NgForm)
  {
    console.log(form);
  }
}


