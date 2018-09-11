import { Component, OnInit } from '@angular/core';

import { Product } from '../../entities/Product';
import { ProductService } from '../../services/product.service';

@Component({
  templateUrl: 'index.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  public products: Product[];

  constructor(
    private productService: ProductService
  ) {
  }

  ngOnInit() {
    this.products = this.productService.findAll();
  }


}
