import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-empprofile',
  templateUrl: './empprofile.component.html',
  styleUrls: ['./empprofile.component.css']
})
export class EmpprofileComponent {

  data:any = {
    "id":localStorage.getItem("userInfo")
  }
  constructor(private api:ApiService){
      api.employeeProfile(this.data).subscribe(
        (response:any)=>{
          console.log(localStorage.getItem("userInfo"))
          console.log(response)
          this.employee = response
        }
      )
  }
  employee:any = []

}
