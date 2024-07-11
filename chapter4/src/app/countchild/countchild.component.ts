// import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
// import { IProduct } from '../product';

// @Component({
//   selector: 'app-countchild',
//   standalone: true,
//   imports: [],
//   templateUrl: './countchild.component.html',
//   styleUrl: './countchild.component.scss'
// })
// export class CountchildComponent implements OnChanges {
//   @Input() product? : IProduct ;
//   @Output() productChange = new EventEmitter<IProduct>();

//   notify(p:IProduct){
//       p.price = p.price + 100;
//       this.productChange.emit(p);
//   }
//   ngOnChanges(changes: SimpleChanges): void {
//     console.log('Product changed', this.product);
//   }
// }

import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  model,
} from '@angular/core';
import { IProduct } from '../product';
import { isPromise } from 'rxjs/internal/util/isPromise';

@Component({
  selector: 'app-countchild',
  standalone: true,
  imports: [],
  templateUrl: './countchild.component.html',
  styleUrl: './countchild.component.scss',
})
export class CountchildComponent implements OnChanges {
  product = model<IProduct>();
  

  notify(p:IProduct | undefined) {
    if(p != undefined){
      console.log('Product changed', p);
      p.price = p.price + 100;
      let p1 = {...p};
      this.product.set(p1);
    }
    
  }

  ngOnChanges(changes: SimpleChanges): void {}
}
