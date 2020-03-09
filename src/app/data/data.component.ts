import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {


  selectedUser = {
    name: null,
    category: null,
    address: null,
    description:null,
    contact:null,
    id: null
  };

  
  constructor(private userDataservice: UserDataService) {
      this.userDataservice.getUserData();
    
   }

  ngOnInit() {

  }
  selectUser(user) {
    this.selectedUser = user;
  }
  updateUser(updateUserForm: NgForm) {
    this.userDataservice.putData(updateUserForm.value).subscribe(resData => {
      console.log(resData);
      updateUserForm.reset();
    }, err => {
      console.log(err);
    });
  }

}
