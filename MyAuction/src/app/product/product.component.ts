import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Array<Product>;

  constructor() { }

  ngOnInit() {
    this.products = [
      new Product(1, '1st item', 2.19, 3.5, 'first item!', ['Electronic', 'Hardware', 'other']),
      new Product(2, '2nd item', 4.59, 2.0, '2nd item!', ['Book', ]),
      new Product(3, '3th item', 8.99, 4.0, '3th item!', ['Staff', ]),
      new Product(4, '4th item', 5.49, 2.5, '4th item!', ['Hardware']),
      new Product(5, '5th item', 6.88, 4.5, '5th item!', ['other']),
      new Product(6, '6th item', 3.45, 3.0, '6th item!', ['Food', 'Cookie']),
      new Product(7, '7th item', 2.00, 1.5, 'fir7thst item!', ['Food', 'Seafood']),
    ];

    this.products.push(new Product(8, '8th item', 4.33, 5.0, '4th item!', ['Tablet']));
  }

}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ){

  }
}