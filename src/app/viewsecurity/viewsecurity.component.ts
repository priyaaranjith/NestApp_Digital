import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewsecurity',
  templateUrl: './viewsecurity.component.html',
  styleUrls: ['./viewsecurity.component.css']
})
export class ViewsecurityComponent {

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


