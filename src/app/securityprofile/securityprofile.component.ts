import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-securityprofile',
  templateUrl: './securityprofile.component.html',
  styleUrls: ['./securityprofile.component.css']
})
export class SecurityprofileComponent {

  
  data:any = {
    "id":localStorage.getItem("userInfo")
  }
  constructor(private api:ApiService){
      api.securityProfile(this.data).subscribe(
        (response:any)=>{
          console.log(localStorage.getItem("userInfo"))
          console.log(response)
          this.security = response
        }
      )
  }
  security:any = []

}
