import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-restaurant',
  templateUrl: './list-restaurant.component.html',
  styleUrls: ['./list-restaurant.component.css']
})
export class ListRestaurantComponent implements OnInit {
  public collections:any;
  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
    this.commonService.getRestoList()
    .subscribe(data => {
      this.collections = data
    });
  }

  deleteResto(id){
    this.commonService.deleteResto(id)
      .subscribe(()=>{
        window.location.reload();
    })
  }

}
