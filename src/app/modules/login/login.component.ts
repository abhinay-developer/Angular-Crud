import { DataService } from './../../services/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 signIn:FormGroup;
 passwordPattern:string="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";
 failureMsg:string="";
  constructor(private fb:FormBuilder,
    private service:DataService,
    private router:Router) {
    
   }
   createSignInFormOnInint() {
    this.signIn = this.fb.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required,Validators.pattern(this.passwordPattern)]],
    });
  }
  ngOnInit(): void {
   
    this.createSignInFormOnInint();
  }
  public getEmail(){
    return this.signIn.get('email');
  }
  public getPassword(){
    return this.signIn.get('password');
  }

  //TO RUN  JSON SERVER  json-server --watch db.json
  loginUser(){
    var email=this.signIn.controls['email'].value;
    var password=this.signIn.controls['password'].value;
    console.log("Email:"+email);
    console.log("Password:"+password);

     if(email="raja@gmail.com"&&password=="Raja@12345"){
       this.router.navigate(['user-home'])
     }
     else{
      this.failureMsg="Invalid Email Or Password";
     }

   
    // this.service.loginUser(email,password).subscribe(
    //   response=>{
    //     alert("Login Success");
    //     console.log(response);
    //     if(response==undefined){
    //       this.failureMsg="Invalid Email Or Password"
    //     }
    //   },
    //   (error)=>{
    //        this.failureMsg="Invalid Email Or Password"
    //     console.log(error);
    //   }
    // )
  }
  
//   resolved(captchaResponse: string) {
//     console.log(`Resolved captcha with response: ${captchaResponse}`);
// }
// errored() {
//   console.warn(`reCAPTCHA error encountered`);
// }
}
