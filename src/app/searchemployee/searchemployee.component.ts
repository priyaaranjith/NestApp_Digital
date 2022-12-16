import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchemployee',
  templateUrl: './searchemployee.component.html',
  styleUrls: ['./searchemployee.component.css']
})
export class SearchemployeeComponent {

  constructor(private api:ApiService, private route:Router){}
  searchData:any=[]

  empid=""



  readValue=()=>{

    let data:any={"empid":this.empid}

    console.log(data)

    this.api.searchemployee(data).subscribe(

      (response:any)=>{

        console.log(response)

        if(response.length==0){

          alert("invalid response")

        }

        else{

          this.searchData=response

        }

      }

    )

   

  }
  deleteBtnClick = (id:any)=>{
    let data:any = {"id":id}
    this.api.deleteemployee(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status == "success") {
          alert("employee Deleted")
          this.route.navigate(["/viewemployee"])

        } else {
          alert("Error")
        }
      }
    )
  }

}
