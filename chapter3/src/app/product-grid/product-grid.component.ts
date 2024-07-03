import { Component, Input, OnInit, inject } from '@angular/core';
import { IProduct } from '../iproduct';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-grid',
  standalone: true,
  imports: [],
  templateUrl: './product-grid.component.html',
  styleUrl: './product-grid.component.scss',
})
export class ProductGridComponent {
  @Input() products?: IProduct[];
 
}
