import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  apiUrl = environment.baseUrl;
  constructor(private http:HttpClient) { }

  getRestoList(){
    return this.http.get(this.apiUrl+'/resto');
  }

  AddRestoService(restoBody){
    return this.http.post(`${this.apiUrl}/resto`,restoBody);
  }

  deleteResto(id){
    return this.http.delete(`${this.apiUrl}/resto/${id}`)
  }

  getCurrentData(id){
    return this.http.get(`${this.apiUrl}/resto/${id}`)
  }

  updateResto(id,data){
    return this.http.put(`${this.apiUrl}/resto/${id}`,data);
  }

  registerResto(data){
    return this.http.post(`${this.apiUrl}/users`,data)
  }



}
