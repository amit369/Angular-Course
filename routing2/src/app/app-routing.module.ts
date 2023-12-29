import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [{
  component : HomeComponent,
  path : 'home' 
},
{
  component : UserComponent,
  path : 'user/:id'
},
{
  component : AboutComponent,
  path : 'about'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
