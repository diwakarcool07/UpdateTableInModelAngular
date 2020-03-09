import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {


  users;
  private user_data="http://hradmin.aryupay.io/tracking/viewreport.php";

  constructor(private http : HttpClient) { }



  putData(user){
    return this.http.put(`${this.user_data}users/${user.id}.json`,user);
  }
  


  getUserData() {
    this.http.get(this.user_data).subscribe(res=>{
      this.users=res['Success'];
      console.log(this.user_data);
      
    })
  }

}
