import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent {

  constructor(private api:ApiService){
    api.fetchemployee().subscribe(
      (response:any)=>{
        console.log(response)
        this.data = response;
      }
    )
}
data:any = []
}


