import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/welcome/login/login.component';
import { SignupComponent } from './components/welcome/signup/signup.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: "",
    component: WelcomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
    outlet: 'LoginPage',
  },
  { 
    path:"signup",
    component: SignupComponent,
    outlet: "SignupPage"
  },
  {
    path: "home",
    component: HomeComponent,
    outlet: "HomePage"
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
