import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addleave',
  templateUrl: './addleave.component.html',
  styleUrls: ['./addleave.component.css']
})
export class AddleaveComponent {

  data: any = ""
  empid = ""
  from = ""
  to = ""
  remarks = ""
  type = ""
  constructor(private api:ApiService, private route:Router) {
    this.data = localStorage.getItem("userInfo")
    api.addleave({"id":this.empid}).subscribe(
      (response:any)=>{
        this.leaveDetails = response
      }
    )
  }

  applyLeave = () => {
    let data: any = {
      "empId": this.empid,
      "fromDate": this.from,
      "toDate": this.to,
      "remarks": this.remarks,
      "leaveType": this.type,
    }
    this.api.applyLeave(data).subscribe(
      (response:any)=>{
        if(response.status=="success"){
          alert("Leave Request Submitted Successfully")
          this.route.navigate(["/viewEmployeeLeave"])
          
        }else{
          alert("Request unsuccessful")
        }
      }
    )
  }
  leaveDetails:any = []

}