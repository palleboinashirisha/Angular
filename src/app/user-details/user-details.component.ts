import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.services';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private userservice : UserService) { }
  
  user : { name: string; job: string; gender: string; age: number; Country: string; profile: string; } | undefined

  ngOnInit(): void {
    this.userservice.OnshowDetailsClicked.subscribe((data : {name : string, job : string, gender:string, age : number, Country:string, profile : string}) => {
      this.user = data
    })
  }

}
