import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'restaurant-app';

  login:boolean;
  constructor(private commonService:CommonService,private router:Router){
  this.login =  this.commonService.loggedIn()
  // console.log(this.login);
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login')
    window.location.reload();
  }
}
