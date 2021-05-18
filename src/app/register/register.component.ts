import { FormBuilder, Validators } from '@angular/forms';
import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  alert:boolean = false;
  errorMessage:boolean = false;
  constructor(private commonService:CommonService,private fb:FormBuilder) { }

  get Email(){
    return this.RegisterForm.get('email');
  }

  get Name(){
    return this.RegisterForm.get('name');
  }

  get Password(){
    return this.RegisterForm.get('password');
  }

  RegisterForm = this.fb.group({
    email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    name:['',[Validators.required,Validators.minLength(3)]],
    password:['',[Validators.required,Validators.minLength(5)]]
  })
  ngOnInit(): void {
  }

  RegisterResto(){
    console.log(this.RegisterForm.getRawValue());
    this.commonService.registerResto(this.RegisterForm.getRawValue())
      .subscribe((result) => {
        console.log(result);
        this.alert = true;
        this.RegisterForm.reset();
      },
      (err)=>{
        if(err){
          this.errorMessage = true;
          this.RegisterForm.reset()
        }
      }
      );
  }

  closealert(){
    this.alert = false;
    this.errorMessage = false;
  }

}
