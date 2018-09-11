import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../services/product.service';
import {Item} from '../../entities/Item';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  itemData: Item;
  constructor( private activatedRoute: ActivatedRoute,
               private productService: ProductService) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    this.activatedRoute.params.subscribe(params => {
      var id = params['id'];
        this.itemData  = {
          product: this.productService.find(id),
          quantity: 10
        };
    });
  }

}
