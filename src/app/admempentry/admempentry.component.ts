import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admempentry',
  templateUrl: './admempentry.component.html',
  styleUrls: ['./admempentry.component.css']
})
export class AdmempentryComponent {

  constructor(private api:ApiService){
    api.viewEmployLog(this.data).subscribe(
      (response)=>
      {
        this.data=response;
      }
    )
  }
  date=""
  searchData:any=[]
  readValue=()=>
  {
    let data:any={"date":this.date}
    console.log(data)
    this.api.viewEmpLogs(data).subscribe(
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
