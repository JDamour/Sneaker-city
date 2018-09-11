import { Component } from '@angular/core';
import {ProductService} from './services/product.service';
import {Product} from './entities/Product';
import {CartComponent} from './components/cart/cart.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sneaker City';
  public products: Product[];
  constructor(
    private productService: ProductService) {
  }

  ngOnInit() {
    this.products = this.productService.findAll();
  }
}
