import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-securitylogin',
  templateUrl: './securitylogin.component.html',
  styleUrls: ['./securitylogin.component.css']
})
export class SecurityloginComponent {

  username =""
  password = ""

  constructor(private api: ApiService, private route: Router) { }
  readValues = ()=>{
    let data:any = {
        "username":this.username,
        "password":this.password
    }
    this.api.Seclogin(data).subscribe(
        (response:any)=>{
            if(response.status=="success"){
                localStorage.setItem("userInfo",response.userInfo)
                this.route.navigate(["/securityProfile"])
            }else{
                alert("failed")
            }
        }
    )

}
}
