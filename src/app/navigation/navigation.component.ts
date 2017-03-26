import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(
    private userService : UserService,
    private router : Router
  ) { }

  ngOnInit() {
  }

  logout() {
    this.userService.logout(() =>{
      this.router.navigate(['']);
    });
  }
}
