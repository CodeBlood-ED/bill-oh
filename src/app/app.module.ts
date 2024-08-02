import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/welcome/login/login.component';
import { SignupComponent } from './components/welcome/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    WelcomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
