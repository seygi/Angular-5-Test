import { Component, OnInit } from '@angular/core';
import { User } from "./user.model";
import { FirstService } from '../core/services/app.service';

@Component({
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  users: User[];
  people: any[] = [
    {
      "name": "Douglas  Pace"
    },
    {
      "name": "Mcleod  Mueller"
    },
    {
      "name": "Day  Meyers"
    },
    {
      "name": "Aguirre  Ellis"
    },
    {
      "name": "Cook  Tyson"
    }
  ];

  constructor(private apiService: FirstService) { }
  ngOnInit() {
    this.apiService.getUsers().subscribe(
      data => {
        this.users = data
        console.log(this.users);
      });
  }
}