import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent {

  constructor(private api: ApiService, private route: Router) { }

  empid=""
  name=""
  designation=""
  salary=""
  phone=""
  email=""
  username=""
  password=""

  readValues =()=>{
    let data ={
      "empid": this.empid,
      "name" :this.name,
      "designation" : this.designation,
      "salary" :this.salary,
      "phone":this.phone,
      "email":this.email,
      "username":this.username,
      "password":this.password

    }
    this.api.addemployee(data).subscribe(
      (response:any)=>{
        if(response.status == "success"){
          console.log(response)
          alert ("employee added")
          this.route.navigate(["/employeelogin"])
        }else{
          alert("employee adding failed")
        }
      }
    )

  }

}
