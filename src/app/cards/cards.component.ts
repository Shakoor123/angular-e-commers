import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  constructor(private http: HttpClient) {}
  products: any;

  ngOnInit(): void {
    this.http
      .get<any>('https://fakestoreapi.com/products/')
      .subscribe((data) => {
        this.products = data;
      });
  }
}
