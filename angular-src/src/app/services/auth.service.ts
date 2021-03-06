import { Injectable } from '@angular/core';
import { Http,Headers } from "@angular/http";
import { tokenNotExpired } from "angular2-jwt";
import 'rxjs/add/operator/map';
@Injectable()
export class AuthService {
  authTOken: any;
  user: any;
  constructor(private http:Http) { }
  
  registerUser(user){
    let headers = new Headers()
    headers.append('Content-Type','application/json')
    return this.http.post('users/register',user, {headers:headers})
    .map(res => res.json())
  }
  authenticateUser(user){
    let headers = new Headers()
    headers.append('Content-Type','application/json')
    return this.http.post('users/authenticate', user, { headers:headers })
    .map(data => data.json())
  }
  storeUserData(token, user){
    localStorage.setItem('id_token', token)
    localStorage.setItem('user', JSON.stringify(user))
    this.authTOken = token
    this.user = user  
  }
  logoutUser(){
    this.authTOken = null
    this.user = null
    localStorage.clear()
  }
  getProfile(){
    let headers = new Headers()
    this.getToken()
    headers.append('Authorization',this.authTOken)
    headers.append('Content-Type','application/json')
    return this.http.get('users/profile', {headers:headers})
    .map(res => 
      res.json()
    )
  }
  loggedIn(){
    return tokenNotExpired('id_token')
  }
  getToken(){
    const token = localStorage.getItem('id_token')
    this.authTOken = token
    
  }
}
