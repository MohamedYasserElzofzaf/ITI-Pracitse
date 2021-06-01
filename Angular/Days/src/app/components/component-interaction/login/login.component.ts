import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {
    // setTimeout(() => {
    //   this.ourEvent.emit(this.loginData);
    // }, 2000);
  }
  loginData = 'Data from login';
  ngOnInit(): void {}
  FireData() {
    this.ourEvent.emit(this.loginData);
  }

  @Output() ourEvent = new EventEmitter();
}
