import { Component, inject } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.scss'
})
export class ProductEditComponent {
 
  pservice = inject(ProductService);

}
