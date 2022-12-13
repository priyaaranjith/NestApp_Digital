import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {

  username=""
  password=""

  constructor(private route : Router){}
  
  readValues =() =>
  {
    let data:any = {
      "Username":this.username,
      "Password":this.password}
      
      console.log(data)

      if (this.username=="admin" && this.password=="12345"){
        this.route.navigate(['/'])
      }
      else{
        alert("invalid credentials")
      }
    }
  }








