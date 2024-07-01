import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './product';

@Pipe({
  name: 'productSearch',
  standalone: true
})
export class ProductSearchPipe implements PipeTransform {

  transform(products: IProduct[], searchText: string): IProduct[] {
    if (!products) {
      return [];
    }
    if (!searchText) {
      return products;
    }
    searchText = searchText.toLowerCase();
    return products.filter(product => {
      return product.Title.toLowerCase().includes(searchText);
    });
  }

}
