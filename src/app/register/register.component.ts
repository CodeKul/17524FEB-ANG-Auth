import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import {User} from '../user'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user : User;
  constructor(
    private userService : UserService
  ) { 
    this.user = new User();
  }

  ngOnInit() {
  }

  register() {
    this.userService.registerNewUser(this.user);
  }
}
