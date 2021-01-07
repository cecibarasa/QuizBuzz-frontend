import { Injectable } from '@angular/core';
import { Router, CanActivate,RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import { AuthService } from 'src/app/services/auth.service';


@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(
    private globalService: GlobalService,
    private router: Router,
    private authservice: AuthService,

  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authservice.loggedIn()) {
      return true
    } else {
      this.router.navigate(['auth/login'], { queryParams: { returnUrl: state.url } })
      return false
    }
  }
}
