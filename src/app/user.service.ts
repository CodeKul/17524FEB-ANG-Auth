import { User } from './user';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

declare var firebase;

@Injectable()
export class UserService {

  constructor(
    private http: Http
  ) {

  }

  registerNewUser(user: User) {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }

  signIn(user: User, callBack: any) {
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
      });

    firebase.auth().onAuthStateChanged(callBack);
  }

  isLoggedIn() {
    return firebase.auth().currentUser;
  }

  logout(callBack) {
    firebase.auth().signOut().then(callBack);
  }
}
