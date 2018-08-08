import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() email: string;
  @Input()  password: string;
  constructor(private router: Router) { }
  ngOnInit() {
  }
  login() {
    if (this.email == 'e' && this.password == 's') {
      this.router.navigate(['user']);
    } else {
      alert("Invalid credentials.")
    }
  }
}