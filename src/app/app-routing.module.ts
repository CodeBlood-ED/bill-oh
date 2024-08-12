import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/welcome/login/login.component';
import { SignupComponent } from './components/welcome/signup/signup.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HomeComponent } from './components/home/home.component';
import { BillingHistoryComponent } from './components/billing-history/billing-history.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "",
    component: WelcomeComponent,
    children : [
      {
        path: "login",
        component: LoginComponent
      }
    ]
  },
  { 
    path:"signup",
    component: SignupComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "billing-history",
    component: BillingHistoryComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
