import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  product!: IProduct;

  constructor(private route: ActivatedRoute, private router: Router) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    // let id = +this.route.snapshot.paramMap.get('id');
    // this.pageTitle += `: ${id}`;
    // this.product = {
    //   'productId': id,
    //   'productName': 'Old Rusty Car',
    //   'productCode': 'RAM-0001',
    //   'dateUploaded': 'March 18, 2019',
    //   'description': 'A very old and rusty car with four wheels.',
    //   'price': 500,
    //   'starRating': 2.1,
    //   'imageUrl': 'assets/images/car.png'
    // };
  }

  onBack(): void {
    this.router.navigate(['./products']);
  }
}
