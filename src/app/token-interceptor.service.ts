import { HttpInterceptor } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector:Injector) { }
// for the server to verify the token we first need to the send the token from the browser to the server 
// with the help of http interceptor
//http interceptor basically intercepts outgoing HTTP requests transforms them and then sends it to the server 
  intercept(req,next){
    let authService = this.injector.get(CommonService)
    // lets make the clone of the request
    let tokenizedRequest = req.clone({
      setHeaders:{
        Authorization:`Bearer ${authService.getToken()}`
        //lets hard code 'xx.yy.zz' jwt token
      }
    })
    return next.handle(tokenizedRequest)
  }
}
//then register the intterceptor service in app module