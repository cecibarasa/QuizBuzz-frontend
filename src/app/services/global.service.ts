import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(
    private cookieService: CookieService
  ) { }

  // apiHost = 'https://quiz--buzz.herokuapp.com/api/';
  apiHost = 'https://code--quiz.herokuapp.com/api/';
  httpHeaders = {'Content-Type': 'application/json'};

  headers() {
    const token = this.getToken();

    if (token !== '') {
      this.httpHeaders['Authorization'] = 'Token ' + token;

    }

    return new HttpHeaders(this.httpHeaders);
  }

  setToken(token: string) {
    localStorage.setItem('Token', token);
    console.log('Token');
  }

  isAuthenticated() {
    const token = this.getToken();
    return token === '' ? false : true;
  }

  getToken() {
    return localStorage.getItem('Token');
  }

  deleteToken() {
    localStorage.removeItem('Token')
  }

  getUserPayLoad() {
    let token = this.getToken();
    if (token) {
      var clientPayload = atob(token.split('.')[1]);
      return JSON.parse(clientPayload)
    } else {
      return null
    }
  }

  isLoggedIn() {
    var userPayload = this.getUserPayLoad();
    if (userPayload) {
      return userPayload.exp > Date.now() / 1000;
    }
  }

}
