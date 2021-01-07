import { GlobalService } from 'src/app/services/global.service';
import { EndpointsService } from './endpoints.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public currentUser: Observable<any>;
  private currentUserSubject: BehaviorSubject<any>;
  private _authUrl = 'https://code--quiz.herokuapp.com/api/auth/'

  constructor(
    private http: HttpClient,
    private endpoints: EndpointsService,
    private globalService: GlobalService, 

  ) { 
    this.currentUserSubject = new BehaviorSubject<any>(localStorage.getItem('Token'));
    this.currentUser = this.currentUserSubject.asObservable();


  }

  register(body) {
    return this.http.post<any>(this._authUrl + 'register/', body)
  }

  public get currentUserValue(){
    return this.currentUserSubject.value;
  }

  login(body) {
    return this.http.post<any>(this._authUrl +'login/', body).pipe(map(userInfo => {
      let token =  userInfo.access
      localStorage.setItem('Token', token);
      this.currentUserSubject.next(userInfo);
      return userInfo
    }));
  }

  logoutUser(){
    localStorage.removeItem('Token')
    this.currentUserSubject.next(null);
  }

  loggedIn(){
    return !!localStorage.getItem('Token')
  }

}
