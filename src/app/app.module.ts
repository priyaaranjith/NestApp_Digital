import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import {HttpClientModule} from '@angular/common/http';
import { AddsecurityComponent } from './addsecurity/addsecurity.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { EmpnavComponent } from './empnav/empnav.component';
import { SecnavComponent } from './secnav/secnav.component';
import { ViewsecurityComponent } from './viewsecurity/viewsecurity.component';

const myRoute : Routes = [
  {
    path : "",
    component : AdminloginComponent
  },
  {
    path :"addemployee",
    component : AddemployeeComponent
  },
  {
    path : "addsecurity",
    component : AddsecurityComponent
  },
  {
    path : "viewemployee",
    component : ViewemployeeComponent
  },
  {
    path : "viewsecurity",
    component : ViewsecurityComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    EmployeeloginComponent,
    AddemployeeComponent,
    AddsecurityComponent,
    AdminNavComponent,
    ViewemployeeComponent,
    EmpnavComponent,
    SecnavComponent,
    ViewsecurityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
