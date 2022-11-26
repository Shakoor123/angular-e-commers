import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  name: string | undefined;
  email: string | undefined;
  password: string | undefined;
  errorMessage: string | undefined;
  user: any;
  constructor(private userService: UserService, private router: Router) {}
  ngOnInit(): void {}

  register() {
    this.user = { name: this.name, password: this.password, email: this.email };
    this.userService.addUser(this.user).then((res) => {
      this.router.navigate(['home']);
    });
  }
}
