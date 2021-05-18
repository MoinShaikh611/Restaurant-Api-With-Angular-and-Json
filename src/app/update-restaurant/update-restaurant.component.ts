import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.css']
})
export class UpdateRestaurantComponent implements OnInit {

  errorMessage:boolean = false;
  alert: boolean = false;
  constructor(private commonService:CommonService,private fb:FormBuilder,private activatedRoute:ActivatedRoute) { }

  UpdateRestoForm = this.fb.group({
    id:[''],
    name:[''],
    location:[''],
    rating:[''],
    contact:['']
  })

  ngOnInit(): void {
    this.commonService.getCurrentData(this.activatedRoute.snapshot.params.id)
      .subscribe(
        (result) =>{ 
          this.UpdateRestoForm = this.fb.group({
            id:result['id'],
            name:result['name'],
            location:result['location'],
            rating:result['rating'],
            contact:result['contact']
          })
        }
      )
  }

  updateResto(){
    this.commonService.updateResto(this.activatedRoute.snapshot.params.id,this.UpdateRestoForm.getRawValue())
      .subscribe((result)=>{
        console.log(result);
      })

  }



}
