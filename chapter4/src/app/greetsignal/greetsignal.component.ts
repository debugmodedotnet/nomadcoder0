import { Component, model } from '@angular/core';
import { IProduct } from '../product';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-greetsignal',
  standalone: true,
  imports: [],
  templateUrl: './greetsignal.component.html',
  styleUrl: './greetsignal.component.scss'
})
export class GreetsignalComponent {

  product  = model<IProduct>();
  count = model<number>();

  updateCount(){
     this.count.update((c:number | undefined)=>{return (c || 0) + 1});
  }
  // updateProduct(){ 
  //   this.product.update((p:IProduct | undefined)=>{
  //     if(p){
  //       return {id:p.id, name:p.name, price:p.price + 1}
  //     }
  //     return p;
  //   });
  // }

  updateProduct(){ 
    let p = {
      id:1,
      name:"Product 1",
      price:100
    }
   this.product.set(p);
  }

}