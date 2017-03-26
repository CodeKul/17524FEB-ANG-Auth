import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs/Rx'

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(
    private userService : UserService,
    private router : Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this.userService.isLoggedIn()){
        return true;
      }
      else {
        this.router.navigate(['']);
      }
  }
}
