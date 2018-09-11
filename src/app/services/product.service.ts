import { Injectable } from '@angular/core';

import { Product } from '../entities/Product';

@Injectable()
export class ProductService {

  private products: Product[];

  constructor() {
    this.products = [
      { id: 'SNE01', Date_release: '2018-08-22', brand: 'Nike', name: 'Sneaker', price: 34000, photo: 'assets/images/nike5.jpg' },

      { id: 'SNE02', Date_release: '2018-03-20', brand: 'Air force 1', name: 'Sneaker', price: 32000, photo: 'assets/images/air5.jpg' },

      { id: 'SNE03', Date_release: '2018-04-20', brand: 'Air force 1', name: 'Sneaker', price: 30000, photo: 'assets/images/nike2.jpg' },

     { id: 'SNE04', Date_release: '2018-02-20', brand: 'Air force', name: 'Sneaker', price: 28000, photo: 'assets/images/air2.jpg' },

      { id: 'SNE05', Date_release: '2018-01-20', brand: 'Nike', name: 'Sneaker', price: 29000, photo: 'assets/images/nike1.jpg' },

      { id: 'SNE06', Date_release: '2017-09-16', brand: 'Air force ', name: 'Sneaker', price: 300, photo: 'assets/images/air3.jpg' },

     { id: 'SNE07', Date_release: '2017-09-12', brand: 'Nike', name: 'Sneaker', price: 100, photo: 'assets/images/nike3.jpg' },

      { id: 'SNE08', Date_release: '2017-08-20', brand: 'Nike', name: 'Sneaker', price: 200, photo: 'assets/images/nike5.jpg' },

      { id: 'SNE09', Date_release: '2017-02-20', brand: 'Nike', name: 'Sneaker', price: 300, photo: 'assets/images/nike4.jpg' },

      { id: 'SNE10', Date_release: '2011-02-12', brand: 'Air force 1', name: 'Sneaker', price: 300, photo: 'assets/images/airforce1.jpg' }
    ];
  }

  findAll(): Product[] {

    return this.products;
  }

  find(id: string): Product {
    return this.products[this.getSelectedIndex(id)];
  }

  private getSelectedIndex(id: string) {
    for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) {
        return i;
      }
    }
    return -1;
  }

}
