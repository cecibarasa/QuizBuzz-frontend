import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const token = localStorage.getItem('Token');
  
      if (token) {
        const cloned = req.clone({
          headers: req.headers.set('Authorization', 'Token '.concat(token))
        });
  
        return next.handle(cloned);
      } else {
        return next.handle(req);
      }
    }
  

}

