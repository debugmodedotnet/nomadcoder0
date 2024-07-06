import {
  Component,
  Signal,
  WritableSignal,
  computed,
  effect,
  signal,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IProduct } from './product';
import { ProductService } from './product.service';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductComponent } from './product/product.component';

function productEuality(a:IProduct,b:IProduct){
    console.log("i am in eqiality function "); 
    if(JSON.stringify(a) === JSON.stringify(b)){
      return true;
    }
    return false;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductEditComponent, ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Chapter 5 Signal Demo';
  product : IProduct = {
    id:1,
    name:"Product 1",
    price: 100
  }

  product$ : WritableSignal<IProduct> = signal(this.product,{equal:productEuality});
  count: WritableSignal<number> = signal(10);
  a: WritableSignal<number> = signal(99);
  isEven: Signal<boolean> = computed(() => {
   //console.log('I am in computed of count signal');
    return this.count() % 2 === 0;
  });
  constructor() {
    effect(()=>{
      console.log('I am in effect of product signal');
      //console.log(this.count());
      console.log(this.product$());
    }); 
    effect(()=>{
      console.log('I am in effect of count signal');
      console.log(this.count());
      console.log(this.isEven());
    });
  }
  updateCount(): void {
   // console.log(this.isEven());
   //this.count.update((c: number) => c + 1);
   this.count.set(100);
  }

  updateProduct(): void {
    let price = 200;
    this.product$.update(()=>{
      return {
        id:2,
        name:"Product 2",
        price: price
      }
    })
  }
}
