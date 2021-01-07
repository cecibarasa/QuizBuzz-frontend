import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GlobalService } from 'src/app/services/global.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = new FormControl('');
  password = new FormControl('');
  returnUrl: string;

  constructor(
    private authService: AuthService,
    private globalService: GlobalService,
    private router: Router,
    private route: ActivatedRoute,
  ) { 
    if (this.globalService.isAuthenticated()) {
      this.router.navigate(['quizzes/all']);
      
  }
  }

  ngOnInit(): void {
    // this.createForm();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'quizzes/all';
  }
  
  login() {
    const body = {
      username: this.username.value,
      password: this.password.value
    };

    this.authService.login(body).subscribe(
      res => {
        this.router.navigate([this.returnUrl]);
      }
    )
  }

}
