import { Component, inject } from '@angular/core';
import { ProductGridComponent } from '../product-grid/product-grid.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { IProduct } from '../iproduct';
import { ProductService } from '../product.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ProductGridComponent, ProductListComponent, NgIf],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  products?: IProduct[];
  showList = false; 
  private pservice = inject(ProductService);// angular 17

  // constructor(private pservice: ProductService) {}

  ngOnInit(): void {
    this.products = this.pservice.getProducts();
  }

  changeMode(): void {
    this.showList = !this.showList;
  }
  deleteProduct(id: number): void {
  }
}
