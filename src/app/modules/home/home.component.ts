import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service:DataService) { }

  ngOnInit(): void {

    this.service.getAllUsers().subscribe(
      reponse=>console.log(reponse),
      error=>console.log(error)
    )
    this.retrieveUserById();
  }

id:number=1;
  retrieveUserById(){
    this.service.getUserById(this.id).subscribe(
      reponse=>console.log(reponse),
      error=>console.log(error)
    )
  }

}
