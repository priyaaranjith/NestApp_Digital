import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewleaves',
  templateUrl: './viewleaves.component.html',
  styleUrls: ['./viewleaves.component.css']
})
export class ViewleavesComponent {

  constructor(private api: ApiService, private route:Router) {
    api.viewallleaves().subscribe(
      (response: any) => {
        this.loading = false
        this.leaves = response
      }
    )
  }
  updateStatus = (id:any,empid:any, status:any, type:any,applyDate:any,leaveDate:any,) => {
    let data: any = { 
      "id": id, 
      "empid": empid, 
      "leaveStatus": status, 
      "Type": type, 
      "applyDate": applyDate, 
      "leaveDate": leaveDate
    }
    this.api.updatestatus(data).subscribe(
      (response:any)=>{
        if(response.status=="success"){
          if(status == 1){
            alert("Leave Approved")
          }else{
            alert("Leave Rejected")
          }
          window.location.reload()
        }else{
          alert("failed")
          window.location.reload() 
        }
        
      }
    )
  }
  leaves: any = []
  loading: boolean = true

}
