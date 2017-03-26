import { UserService } from './../user.service';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  user : User;
  constructor(
    private userService : UserService,
    private router : Router
  ) {
    this.user = new User();
   }

  ngOnInit() {
  }

  login() {
    this.userService.signIn(this.user, info => {
      console.log('' + (info ? 'Success' : 'fail'));
      this.router.navigate(['/home']);
    });
  }
}
