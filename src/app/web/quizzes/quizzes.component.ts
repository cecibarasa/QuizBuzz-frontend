import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { EndpointsService } from 'src/app/services/endpoints.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.scss']
})
export class QuizzesComponent implements OnInit {

  currentUser: any;
  user;

  constructor(public authService: AuthService, private router: Router, public endpoints: EndpointsService, private http: HttpClient) {
    this.authService.currentUser.subscribe(x => this.currentUser = x); { }
  }
  logout() {
    this.authService.logoutUser();
    this.router.navigate(['auth/login'])
  }

  quizzz(){
    this.endpoints.quizzes();
    this.router.navigate(['quizzes/all'])
  }

  ngOnInit(): void {
    

  }
  
}
