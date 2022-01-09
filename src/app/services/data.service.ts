import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
baseURL:string="http://localhost:3000/";
  constructor(private http:HttpClient) { 
    let headers = new HttpHeaders()
    headers .set('content-type', 'application/json')
    headers .set('Access-Control-Allow-Origin', '*')
    console.log(headers); 
  }

//Creating a User
  createUser(user:any){

    return this.http.post(this.baseURL+'users',user);
  }

  // loginUser(email:string="raja@gmail.com",password:string="Raja@12345"){
  //   return this.http.post(this.baseURL+`/users/login/${email}/${password}`,{ 'headers': Headers });
  // }


//GET ALL USERS
getAllUsers(){

  return this.http.get(this.baseURL+'users');

}
// GET USER BY ID
getUserById(id:number){
  console.log(this.baseURL+`users/${id}`);
  return this.http.get(this.baseURL+`users/${id}`);
}
  
deleteUser(id:number){
  return this.http.delete(this.baseURL+`users/${id}`);

}
updateUser(id:number,user:any){
  return this.http.put(this.baseURL+`users/${id}`,user)

}

}
