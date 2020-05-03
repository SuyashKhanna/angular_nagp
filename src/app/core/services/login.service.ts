import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  loginStateEmitter: EventEmitter<string> = new EventEmitter();
  loginState = "LOGOUT"
  credentials = [
    {
      username: 'admin',
      password: 'password'
    }
  ]
  login(username: string, password: string) {
    if (this.credentials
      .find(c => c.username === username && c.password === password)
      != undefined) {
      localStorage.setItem('cred', username)
      this.loginState = "LOGIN";
      this.loginStateEmitter.emit("LOGIN");
      return true;
    }
    else {
      return false;
    }
  }

  logout() {
    localStorage.removeItem('cred');
    this.loginState = "LOGOUT"
    this.loginStateEmitter.emit("LOGOUT");
  }
}


