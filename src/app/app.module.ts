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

const myRoute : Routes = [
  {
    path : "",
    component : AdminloginComponent
  },
  {
    path :"addemployee",
    component : AddemployeeComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    EmployeeloginComponent,
    AddemployeeComponent
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
