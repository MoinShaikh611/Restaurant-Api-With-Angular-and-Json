import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {
  errorMessage:boolean = false;
  alert: boolean = false;
  constructor(private fb:FormBuilder,private commonService:CommonService,private router:Router) { }

  
  AddRestoForm = this.fb.group({ 
    id:[''],
    name:[''],
    location:[''],
    rating:[''],
    contact:['']
  })
  ngOnInit(): void {
  }

  AddResto(){
    this.commonService.AddRestoService(this.AddRestoForm.getRawValue())
      .subscribe(
        res =>{
          // this.router.navigate(['list']);
          this.alert = true;
          this.AddRestoForm.reset();
        },
        err =>{
          if(err.status === 500){
            this.AddRestoForm.reset();
            this.errorMessage = true;
          }
          else{
            console.log(err.message);
          }
        }
      );
      }

      closealert(){
        this.alert = false;
        this.errorMessage = false
      }
}