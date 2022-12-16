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
import { SecurityloginComponent } from './securitylogin/securitylogin.component';
import { AddleaveComponent } from './addleave/addleave.component';
import { SearchemployeeComponent } from './searchemployee/searchemployee.component';
import { SearchsecurityComponent } from './searchsecurity/searchsecurity.component';
import { CreatelogComponent } from './createlog/createlog.component';
import { EmpprofileComponent } from './empprofile/empprofile.component';
import { AdmempentryComponent } from './admempentry/admempentry.component';
import { AdmvisitorComponent } from './admvisitor/admvisitor.component';
import { AllempentryComponent } from './allempentry/allempentry.component';
import { AllvisitorentryComponent } from './allvisitorentry/allvisitorentry.component';
import { VisitoraddentryComponent } from './visitoraddentry/visitoraddentry.component';
import { SecurityprofileComponent } from './securityprofile/securityprofile.component';
import { ViewleavesComponent } from './viewleaves/viewleaves.component';
import { HomeComponent } from './home/home.component';
import { HomenavComponent } from './homenav/homenav.component';

const myRoute : Routes = [
  {
    path:"",
    component:HomeComponent

  },
  {
    path : "adminlogin",
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
  },
  {
    path :"employeelogin",
    component :EmployeeloginComponent
  },
  {
    path : "securitylogin",
    component :SecurityloginComponent
  },
  {
    path : "addleave",
    component : AddleaveComponent
  },
  {
    path : "searchemployee",
    component :SearchemployeeComponent
  },
  {
    path:"employeeProfile",
    component: EmpprofileComponent
  },
  {
    path :"admempentry",
    component :AdmempentryComponent
  },
  {
    path : "admvisitor",
    component : AdmvisitorComponent
  },
  {
    path : "allempentry",
    component :AllempentryComponent
  },
  {
    path :"searchsecurity",
    component:SearchsecurityComponent
  },
  {
    path :"securityProfile",
    component:SecurityprofileComponent
  },
  {
    path : "viewleaves",
    component :ViewleavesComponent
  },
  {
    path :"viewcheckin",
    component :CreatelogComponent
  },
  {
    path:"viewalllogs",
    component:AllvisitorentryComponent
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
    ViewsecurityComponent,
    SecurityloginComponent,
    AddleaveComponent,
    SearchemployeeComponent,
    SearchsecurityComponent,
    CreatelogComponent,
    EmpprofileComponent,
    AdmempentryComponent,
    AdmvisitorComponent,
    AllempentryComponent,
    AllvisitorentryComponent,
    VisitoraddentryComponent,
    SecurityprofileComponent,
    ViewleavesComponent,
    HomeComponent,
    HomenavComponent
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
