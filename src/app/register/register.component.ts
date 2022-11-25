import { Component, OnInit } from '@angular/core';

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
  constructor() {}
  ngOnInit(): void {}
  // register = async () => {
  //   try {
  //   } catch (e) {
  //     console.error('Error adding document: ', e);
  //   }
  // };
  register() {
    console.log(this.name, this.password, this.email);
  }
}
