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
  employeeProfile = (data:any)=>{
    return this.http.post("http://localhost:8080/viewprofile",data)
  }
  viewEmployLog=(data : any)=>
  {
    return this.http.post("http://localhost:8080/viewlogbyid",data)
  }
  viewEmpLogs=(data:any)=>
  {
    return this.http.post("http://localhost:8080/viewalllogs",data)
  }
  viewDailyVisitorLog=(data:any)=>
  {
    return this.http.post("http://localhost:8080/viewdailyvisitorelog",data)
  }
  viewDailyEmpLog=(data:any)=>
  {
    return this.http.post("http://localhost:8080/viewdailyemployeelog",data)
  }
  viewEmployLogg=()=>
  {
    return this.http.get("http://localhost:8080/viewallemployeelog")
  }
  viewVisitorLog=()=>
  {
    return this.http.get("http://localhost:8080/viewallvisitorlog")
  }
  addvisitor=(data:any)=>
  {
    return this.http.post("http://localhost:8080/addvisitor",data)
  }
  searchsecurity=(dataTo:any)=>
  {
    return this.http.post("http://localhost:8080/searchSec",dataTo)
  }
  deleteemployee=(dataTo:any)=>
  {
    return this.http.post("http://localhost:8080/delete",dataTo)
  }
  deletesecurity=(dataTo:any)=>
  {
    return this.http.post("http://localhost:8080/deleteSec",dataTo)
  }
  securityProfile = (data:any)=>{
    return this.http.post("http://localhost:8080/viewprofiles",data)
  }
  viewallleaves=()=>
  {
    return this.http.get("http://localhost:8080/viewallleaves")
  }
  updatestatus = (data:any)=>{
    return this.http.post("http://localhost:8080/updatestatus",data)
  }
  viewcheckin=()=>
  {
    return this.http.get("http://localhost:8080/viewcheckin")
  }
  viewalllogs = (data:any)=>{
    return this.http.post("http://localhost:8080/viewalllogs",data)
  }


}
