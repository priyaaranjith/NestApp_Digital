import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchsecurity',
  templateUrl: './searchsecurity.component.html',
  styleUrls: ['./searchsecurity.component.css']
})
export class SearchsecurityComponent {

  constructor(private api:ApiService, private route:Router){}

  searchData:any=[]

  sid=""



  readValue=()=>{

    let data:any={"empid":this.sid}

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



