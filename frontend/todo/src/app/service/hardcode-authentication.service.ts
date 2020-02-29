import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodeAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    //console.log('before ' + this.isUserLoggedIn());
    if(username === "inTime" && password === 'dummy') {
      sessionStorage.setItem('authenticaterUser', username);
      //console.log('after ' + this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticaterUser');
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem('authenticaterUser');
  }
    
}
