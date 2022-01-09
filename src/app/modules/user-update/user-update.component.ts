import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {

  updateForm: FormGroup;
  alphaValidation:string="^[a-zA-Z]+$";
  passwordPattern:string="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";
  userArr: any[]=[];
  selectedId:any;
  constructor(
    private fb: FormBuilder,
    private service:DataService,
    private router:Router,
    private route:ActivatedRoute
    ) {}

  ngOnInit(): void {
  
    this.createFormOnInint();
  // let regex=new RegExp(this.alphaValidation);
  // console.log(regex.test("Abhinay000000001111/"));

   this.selectedId= this.route.snapshot.paramMap.get('id');//1
    console.log("The ID is::"+this.selectedId);
//GET USER BY ID
    this.retrieveUserById();
 
  }

  retrieveUserById(){
    this.service.getUserById(this.selectedId).subscribe(
      (response:any)=>{
        this.userArr.push(response);
        //TO SET VALUES IN INPUT FEILD
        this.updateForm.controls['firstName'].setValue(response.firstName);
        this.updateForm.controls['lastName'].setValue(response.lastName);
        this.updateForm.controls['email'].setValue(response.email);
        this.updateForm.controls['password'].setValue(response.password);
        this.updateForm.controls['profession'].setValue(response.profession);
        this.updateForm.controls['country'].setValue(response.country);
        this.updateForm.controls['city'].setValue(response.city);

        console.log(response);
      },
      (error:any)=>console.log(error)
    )
  }



  createFormOnInint() {
    this.updateForm = this.fb.group({
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
    return this.updateForm.get('firstName');
  }
  public getLastName(){
    return this.updateForm.get('lastName');
  }
  public getEmail(){
    return this.updateForm.get('email');
  }
  public getPassword(){
    return this.updateForm.get('password');
  }
  public getProfession(){
    return this.updateForm.get('profession');
  }
  public getCountry(){
    return this.updateForm.get('country');
  }
  public getCity(){
    return this.updateForm.get('city');
  }


  updateAUser(){
    this.service.updateUser(this.selectedId,this.updateForm.value).subscribe(
      (response:any)=>{
        alert("updated Success");
         this.router.navigate(['user-home']);
        console.log(response);
      },
     (error:any)=>{
       alert("updation  Failed");
       console.log(error);
     } 
     )
    }
}
