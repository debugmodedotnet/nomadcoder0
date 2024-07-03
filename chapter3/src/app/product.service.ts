import { Injectable } from '@angular/core';
import { IProduct } from './iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { 
    
  }
  
  getProducts(): IProduct[] {

    // getting data from API
    return [
      {
        id: 1,
        name: 'Product 1',
        price: 100,
      },
      {
        id: 2,
        name: 'Product 2',
        price: 200,
      },
      {
        id: 3,
        name: 'Product 3',
        price: 300,
      },
    ];
  }


}
