import { HTTP_INTERCEPTORS, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { TokenService } from './token.service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
       

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  router: any;
  constructor(private token: TokenService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    const token = this.token.getToken();
    if (token != null) {
      authReq = req.clone({ headers: req.headers.set("Authorization",  token) });
    }
    return next.handle(authReq).pipe(
      catchError(error =>{
        if(error.status === 401){
          alert('Access Denied');
          // <Log the user out of your application code>
          this.router.navigate([ 'notautorized' ]);
          return throwError(error);
        }
        return throwError(error);
      })
    );
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];