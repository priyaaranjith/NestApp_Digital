import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addsecurity',
  templateUrl: './addsecurity.component.html',
  styleUrls: ['./addsecurity.component.css']
})
export class AddsecurityComponent {

  constructor(private api: ApiService, private route: Router) { }


  sid=''
  name=""
  salary=""
  phone=""
  email=""
  username=""
  password=""

  readValues =()=>{
    let data ={
      "empid": this.sid,
      "name" :this.name,
      "salary" :this.salary,
      "phone":this.phone,
      "email":this.email,
      "username":this.username,
      "password":this.password

    }
    this.api.addsecurity(data).subscribe(
      (response:any)=>{
        if(response.status == "success"){
          console.log(response)
          alert ("security added")
          this.route.navigate(["/securitylogin"])
        }else{
          alert("security adding failed")
        }
      }
    )

  }


}
