import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  user = true;
  button: boolean | true = false;
  constructor() {}

  ngOnInit(): void {
    if (this.user == true) {
      this.button = false;
    } else {
      this.button = true;
    }
  }
}
