import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-createlog',
  templateUrl: './createlog.component.html',
  styleUrls: ['./createlog.component.css']
})
export class CreatelogComponent {

  constructor(private api:ApiService,private route:Router){}
  empid =""

  addEntry = ()=>{
    let data:any = {
      "empid":this.empid
    }
    this.api.viewcheckin().subscribe(
      (response:any)=>{
        if(response.status == "success"){
          alert("success")
          window.location.reload()
        }else{
          alert("Employee is in Leave")
        }
      }
    )
  }


}

