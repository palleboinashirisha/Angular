import { Component } from '@angular/core';
import { UserService } from './services/user.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [UserService]
})
export class AppComponent {
  title = 'USERSERVICES';

  constructor(private userservice : UserService){

  }
}
