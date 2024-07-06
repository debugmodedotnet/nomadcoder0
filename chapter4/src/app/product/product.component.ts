import { Component, inject, signal } from '@angular/core';
import { ProductService } from '../product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
   pservice = inject(ProductService);
   count: number = 99; 

   updateCount():void{
     this.pservice.updateCount(this.count);
   }

}
