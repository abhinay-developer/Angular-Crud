import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {
userArr:any[]=[];
errorMessage:string="";
  constructor(
    private service:DataService,
    private router:Router) { }

    //After Constuctor Next called Method
  ngOnInit(): void {
    this.retrieveAllUsers();
  }
//Retrieve All  Users
  retrieveAllUsers(){
    this.service.getAllUsers().subscribe(
      (response:any)=>{
        this.userArr=response;
        // if(response==null||response ==undefined){
        //  this.errorMessage="SERVER IS NOT ACTIVE PLEASE VISIT AFTER SOME TIME"
        // }
        console.log(response);
      },
      (error:any)=>console.log(error)
    )
  }

  onDelete(value){
    //Confirm BOX OF JS
    if(confirm("Do You Wanna Delete ?")){
      this.service.deleteUser(value).subscribe(
        response=>{
          // console.log(response);
          console.log(`The Reponse is: ${response}`)
          this.retrieveAllUsers();
        },//close of response
        error=>{
          console.log(error);
        }//close of error
      )
    }//close of if
    else{
      return false;
    }//close of else
 
  }
  onAdd(){
    this.router.navigate(['sign-up'])
  }

  onUpdate(value){
   alert("Value ::"+value);
   this.router.navigate(['user-update',value])
  }
}
