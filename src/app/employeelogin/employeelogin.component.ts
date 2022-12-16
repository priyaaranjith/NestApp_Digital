import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employeelogin',
  templateUrl: './employeelogin.component.html',
  styleUrls: ['./employeelogin.component.css']
})
export class EmployeeloginComponent {

  username =""
  password = ""

  constructor(private api:ApiService, private route:Router){}
 

  readValues = ()=>{
      let data:any = {
          "username":this.username,
          "password":this.password
      }
      this.api.Emplogin(data).subscribe(
          (response:any)=>{
              if(response.status=="success"){
                  localStorage.setItem("userInfo",response.userInfo)
                  this.route.navigate(["/employeeProfile"])
              }else{
                  alert("failed")
              }
          }
      )

  }


}
