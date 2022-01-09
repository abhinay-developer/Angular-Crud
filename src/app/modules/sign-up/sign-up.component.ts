import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  //Create FormGroup For Reactive Forms
  signUpForm: FormGroup;
  alphaValidation:string="^[a-zA-Z]+$";
  passwordPattern:string="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";
  constructor(
    private fb: FormBuilder,
    private service:DataService,
    private router:Router
    ) {}

  ngOnInit(): void {
    this.createFormOnInint();
  // let regex=new RegExp(this.alphaValidation);
  // console.log(regex.test("Abhinay000000001111/"));
 
  }

  createFormOnInint() {
    this.signUpForm = this.fb.group({
      firstName: ['', [Validators.required,Validators.pattern(this.alphaValidation)]],
      lastName: ['', [Validators.required,Validators.pattern(this.alphaValidation)]],

      email: ['', [Validators.required,Validators.email]],

      password: ['', [Validators.required,Validators.pattern(this.passwordPattern)]],

      profession: ['', [Validators.required,Validators.pattern(this.alphaValidation)]],

      country: ['', [Validators.required,Validators.pattern(this.alphaValidation)]],

      city: ['', [Validators.required,Validators.pattern(this.alphaValidation)]],
    });
  }

  /*Validations */

  public getFirstName(){
    return this.signUpForm.get('firstName');
  }
  public getLastName(){
    return this.signUpForm.get('lastName');
  }
  public getEmail(){
    return this.signUpForm.get('email');
  }
  public getPassword(){
    return this.signUpForm.get('password');
  }
  public getProfession(){
    return this.signUpForm.get('profession');
  }
  public getCountry(){
    return this.signUpForm.get('country');
  }
  public getCity(){
    return this.signUpForm.get('city');
  }

//To Create a User
    createAUser(){
    this.service.createUser(this.signUpForm.value).subscribe(
      (reponse:any)=>{
        alert("Registration Success");
        //To Navigate the Login Component
        this.router.navigate(['sign-in']);
        console.log(reponse);
      },
     (error:any)=>{
       alert("Registration Failed");
       console.log(error);
     } 
     )
    }
}
