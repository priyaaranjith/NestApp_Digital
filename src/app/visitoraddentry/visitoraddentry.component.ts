import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-visitoraddentry',
  templateUrl: './visitoraddentry.component.html',
  styleUrls: ['./visitoraddentry.component.css']
})
export class VisitoraddentryComponent {

  name=""
  purpose=""
  whomtomeet=""
  date=""
  entry_datetime=""
  exit_datetime=""
constructor(private api:ApiService){}
  readValue=()=>
  {
    let data:any={"name":this.name,"purpose":this.purpose,"whomtomeet":this.whomtomeet,date:this.date,
  "entry_datetime":this.entry_datetime,"exit_datetime":this.exit_datetime}
  console.log(data)
    this.api.addvisitor(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.status=="success") {
          alert("Visitor Entry success")
        } else {
          alert("not allowed")
        }
      }
    )
  }

}
