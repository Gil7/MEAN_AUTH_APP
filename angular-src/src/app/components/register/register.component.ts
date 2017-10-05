import { Component, OnInit } from '@angular/core';
import { ValidateService } from "../../services/validate.service";
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name:String;
  username:String;
  email:String;
  password:String;
  constructor(private validateService:ValidateService
              ,private _flashMessagesService: FlashMessagesService,
              private authService:AuthService,
              private router:Router) { }

  ngOnInit() {
  }
  onRegisterSubmit(){
    const user = {
      name:this.name,
      username:this.username,
      email:this.email,
      password:this.password
    }
    if(!this.validateService.validateUser(user)){
      this._flashMessagesService.show('Please fill in all fields!', { cssClass: 'alert-danger', timeout: 3000 });      
      return false
    }
    if(!this.validateService.validateEmail(user.email)){
      this._flashMessagesService.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });      
      return false
    }
    this.authService.registerUser(user).subscribe(data => {
      if(data.success){
        this._flashMessagesService.show('You are now registered and can long in!!',{cssClass:'alert-success', timeout:3000})
        this.router.navigate(['/login'])
      }else{
        this._flashMessagesService.show('something went wrong!!',{cssClass:'alert-danger', timeout:3000})
        this.router.navigate(['/register'])
      }
    })
  }

}
