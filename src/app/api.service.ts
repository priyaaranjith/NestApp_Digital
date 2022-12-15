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
  Emplogin =(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/login",dataToSend)
  }
  Seclogin =(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/loginSec",dataToSend)
  }
  addleave=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/addleave",dataToSend)
  }
  searchemployee=(dataTo:any)=>
  {
    return this.http.post("http://localhost:8080/search",dataTo)
  }
  applyLeave = (data:any)=>
  {
    return this.http.post("http://localhost:8080/addleave",data) 
  }

}
