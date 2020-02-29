import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let username = 'inTime'
    let password = 'dummy'
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    //Creates a clone and override a 
    //specific property
    // Adding the authorization header
    request = request.clone({
      setHeaders: {
        Authorization: basicAuthHeaderString
      }
    })
    // The intercepter acts like a filter
    return next.handle(request);
  }

}
