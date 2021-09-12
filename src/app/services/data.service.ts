import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const options={
  withCredentials:true
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  signUp(userName:any,password:any){
    const data={
      username:userName,
      password:password
    }
    
    return this.http.post('http://localhost:3000/register',data,options)

  }
  login(name:any,pswd:any){
    const data={
      name,
      pswd
    }

    return this.http.post("http://localhost:3000/login",data,options)
    

  }
  add(name:any,price:any,qty:any){
    const data={
      name:name,
      price:price,
      qty:qty
    }
    console.log(data);
    return this.http.post('http://localhost:3000/add',data,options)
      }
    displayProducts(){
      return this.http.post('http://localhost:3000/displayProducts',options)
    }
    search(search:any){
      
      return this.http.get("http://localhost:3000/search")
    }
}
