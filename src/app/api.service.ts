import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  addemployee=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/add",dataToSend)
  }
  addsecurity=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/addSec",dataToSend)
  }
  fetchemployee=()=>
  {
    return this.http.get("http://localhost:8080/view")
  }
  fetchesecurity=()=>
  {
    return this.http.get("http://localhost:8080/viewAll")
  }
}
