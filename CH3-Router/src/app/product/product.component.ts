import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 productId: number;
 private productName: string;

  constructor( private routerInfo: ActivatedRoute) { }

  ngOnInit() {

    this.routerInfo.params.subscribe((params: Params) => this.productId = params['id']);
    // this.productId = this.routerInfo.snapshot.queryParams["id"];
    // this.productId = this.routerInfo.snapshot.params["id"];

    this.routerInfo.data.subscribe((data: {product: Product}) => {
      this.productId = data.product.id;
      this.productName = data.product.name;
    });
  }

}

export class Product {
  constructor(public id: number, public name: string) {

  }
}