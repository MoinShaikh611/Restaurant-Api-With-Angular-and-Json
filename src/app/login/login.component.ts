import { FormBuilder, Validators } from '@angular/forms';
import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  alert:boolean = false;
  errorMessage:boolean = false;
  email:string;
  password:string;
  LoginArray:string[] = []
  constructor(private commonService:CommonService,private fb:FormBuilder,private router:Router,private activatedRoute:ActivatedRoute) { }



  LoginForm = this.fb.group({
    email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    password:['',[Validators.required,Validators.minLength(5)]]
  })
  get Email(){
    return this.LoginForm.get('email');
  }

  get Password(){
    return this.LoginForm.get('password');
  }
  ngOnInit(): void {
  }
  LoginResto(){
    this.LoginArray = this.LoginForm.getRawValue()
    if(this.LoginArray['email']  === 'imoin611@gmail.com' && this.LoginArray['password'] === 'monu@786'){
      this.router.navigate(['list'])
    }
    else{
      this.errorMessage = true;
    }
    
  }

  closealert(){
    this.errorMessage = false;
    this.LoginForm.reset();
  }
}
