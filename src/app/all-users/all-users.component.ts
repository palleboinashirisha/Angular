import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.services';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUSersComponent implements OnInit {

  constructor(private userservice : UserService) { }

  users : {name : string, job : string, gender:string, age : number, Country:string, profile : string}[] = []

  ngOnInit(): void {
    this.users = this.userservice.users
  }

  showDetails(user : {name : string, job : string, gender:string, age : number, Country:string, profile : string}){
    this.userservice.ShowDetailsView(user)
  }
}
