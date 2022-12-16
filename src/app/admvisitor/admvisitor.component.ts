import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admvisitor',
  templateUrl: './admvisitor.component.html',
  styleUrls: ['./admvisitor.component.css']
})
export class AdmvisitorComponent {

  constructor(private api:ApiService){
    api.viewDailyVisitorLog(this.data).subscribe(
      (response:any)=>
      {
        this.data=response
      }
    )
  }
  date=""
  searchData:any=[]
  readValue=()=>
  {
    let data:any={"date":this.date}
    console.log(data)
    this.api.viewDailyVisitorLog(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if(response.length==0)
        {
          alert("invalid")
        }
        else{
          this.data=[];
          this.searchData=response
        }
      }
    )

  }
  data:any=[]


}
