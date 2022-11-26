import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  arrLen = 0;
  user: any;
  logins: any;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}
  login() {
    this.user = { password: this.password, email: this.email };
    this.logins = this.userService.loginProcess().subscribe((res) => {
      console.log(res);
      this.arrLen = res.length;
      // for(){

      // }
    });
    // this.router.navigate(['home']);
  }
}
