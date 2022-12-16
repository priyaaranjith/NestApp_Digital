import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-allempentry',
  templateUrl: './allempentry.component.html',
  styleUrls: ['./allempentry.component.css']
})
export class AllempentryComponent {

  constructor(private api:ApiService){
    api.viewEmployLogg().subscribe(
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
    this.api.viewDailyEmpLog(data).subscribe(
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
