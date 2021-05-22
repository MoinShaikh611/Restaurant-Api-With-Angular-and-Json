import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import { CommonService } from '../common.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private commonService:CommonService,private router:Router){}

  canActivate():boolean{
    if(this.commonService.loggedIn()){
      return true;
    }
    else{
      this.router.navigate(['login'])
      return false;
    }
  }
  


  
}
