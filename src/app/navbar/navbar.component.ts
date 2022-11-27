import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  user = true;
  button: boolean | true = false;
  constructor(private router: Router) {}

  ngOnInit(): void {
    if (this.user == true) {
      this.button = false;
    } else {
      this.button = true;
    }
  }
  gotohome() {
    this.router.navigate(['home']);
  }
}
