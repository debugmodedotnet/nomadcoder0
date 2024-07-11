// import {
//   Component,
//   Signal,
//   WritableSignal,
//   computed,
//   effect,
//   signal,
// } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { IProduct } from './product';
// import { ProductService } from './product.service';
// import { ProductEditComponent } from './product-edit/product-edit.component';
// import { ProductComponent } from './product/product.component';
// import { ProductSignalComponent } from './product-signal/product-signal.component';

// function productEuality(a:IProduct,b:IProduct){
//     console.log("i am in eqiality function ");
//     if(JSON.stringify(a) === JSON.stringify(b)){
//       return true;
//     }
//     return false;
// }
// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [
//     RouterOutlet,
//     ProductEditComponent,
//     ProductComponent,
//     ProductSignalComponent],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss',
// })
// export class AppComponent {
//   title = 'Chapter 5 Signal Demo';
//   product : IProduct = {
//     id:1,
//     name:"Product 1",
//     price: 100
//   }

//   product$ : WritableSignal<IProduct> = signal(this.product,{equal:productEuality});
//   count: WritableSignal<number> = signal(10);
//   a: WritableSignal<number> = signal(99);
//   isEven: Signal<boolean> = computed(() => {
//    //console.log('I am in computed of count signal');
//     return this.count() % 2 === 0;
//   });
//   constructor() {
//     effect(()=>{
//       console.log('I am in effect of product signal');
//       //console.log(this.count());
//       console.log(this.product$());
//     });
//     effect(()=>{
//       console.log('I am in effect of count signal');
//       console.log(this.count());
//       console.log(this.isEven());
//     });
//   }
//   updateCount(): void {
//    // console.log(this.isEven());
//    //this.count.update((c: number) => c + 1);
//    this.count.set(100);
//   }

//   updateProduct(): void {
//     let price = 200;
//     this.product$.update(()=>{
//       return {
//         id:2,
//         name:"Product 2",
//         price: price
//       }
//     })
//   }
// }

// import {
//   Component,
//   Signal,
//   WritableSignal,
//   computed,
//   effect,
//   signal,
// } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { IProduct } from './product';
// import { ProductService } from './product.service';
// import { ProductEditComponent } from './product-edit/product-edit.component';
// import { ProductComponent } from './product/product.component';
// import { ProductSignalComponent } from './product-signal/product-signal.component';
// import { PsignalComponent } from './psignal/psignal.component';

// function productEuality(a:IProduct,b:IProduct){
//     console.log("i am in eqiality function ");
//     if(JSON.stringify(a) === JSON.stringify(b)){
//       return true;
//     }
//     return false;
// }
// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [
//     RouterOutlet,
//     ProductEditComponent,
//     PsignalComponent,
//     ProductComponent,
//     ProductSignalComponent],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss',
// })
// export class AppComponent {
//   title = 'Chapter 5 Signal Demo';
//   product : IProduct = {
//     id:1,
//     name:"Product 1",
//     price: 100
//   }
//   counter = 99;
//   selectedProduct?: IProduct;
//   onProductChange(p: IProduct) {
//     this.selectedProduct = p;
//     console.log('Product changed:', this.selectedProduct);
//   }

//   onProductChange1(p: IProduct | undefined) {
//     this.selectedProduct = p;
//     console.log('Product changed model', this.selectedProduct);

//   }
//   constructor() {

//   }

//   onIncrement()
//   {
//     this.counter = this.counter + 1;
//   }

// }

// import {
//   Component,
//   Injector,
//   OnInit,
//   Signal,
//   ViewChild,
//   WritableSignal,
//   computed,
//   effect,
//   signal,
// } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { IProduct } from './product';
// import { ProductService } from './product.service';
// import {CountchildComponent} from './countchild/countchild.component';
// import { JsonPipe } from '@angular/common';
// import { count } from 'rxjs';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [
//    CountchildComponent,
//     RouterOutlet,
//     JsonPipe
//   ],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss',
// })
// export class AppComponent implements OnInit {
//   title = 'Chapter 5 Signal Demo';
//   @ViewChild(CountchildComponent,{static:true}) countchildComponent!: CountchildComponent;

//   constructor(private i: Injector){
//     effect(()=>{

//     })
//   }

//   ngOnInit(): void {
//       this.myFunct();
//   }

//   myFunct(){
//     effect(()=>{
//         console.log(this.countchildComponent.product());
//     },{injector:this.i})
//   }

//    product : IProduct = {
//     id:1,
//     name:"Product 1",
//     price: 100
//    }

//    p?:IProduct ;

//    notify(p:IProduct | undefined){
//     if(p!= undefined){
//       console.log('Product changed', p);
//       this.p = {...p}
//     }

//    }

// }

// import {
//   Component,
//   Injector,
//   OnInit,
//   Signal,
//   ViewChild,
//   WritableSignal,
//   computed,
//   effect,
//   signal,
// } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { IProduct } from './product';
// import { ProductService } from './product.service';
// import {CountchildComponent} from './countchild/countchild.component';
// import { JsonPipe } from '@angular/common';
// import { count } from 'rxjs';
// import {GreetsignalComponent } from './greetsignal/greetsignal.component';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [
//    GreetsignalComponent,
//     RouterOutlet,
//     JsonPipe
//   ],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss',
// })
// export class AppComponent  {

//   title = "model input";
//   p:IProduct = {
//     id:1,
//     name:"Product 1",
//     price: 100
//   }
//   count = 99;

//   notifyCount(c:number |undefined){
//     console.log('Count changed', c);
//   }
//   notifyProduct(product:IProduct | undefined){
//     // if(product != undefined)
//     //   {
//     //     this.p = {...product};
//     //   }
//     console.log('Product changed', product);

//   }
// }

import {
  Component,
  Injector,
  OnInit,
  Signal,
  ViewChild,
  WritableSignal,
  computed,
  effect,
  signal,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IProduct } from './product';
import { JsonPipe } from '@angular/common';
import { FoosignalComponent } from './foosignal/foosignal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FoosignalComponent, RouterOutlet, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'model input';
  p: IProduct = {
    id: 1,
    name: 'Product 1',
    price: 100,
  };
  count = 99;
  value = 180; 

  constructor(){
    effect(()=>{
      console.log(this.p);
    })
  }

  notifyCount(c: number ) {
    console.log('Count changed', c);
  }
  notifyProduct(product: IProduct) {
    // if(product != undefined)
    //   {
    //     this.p = {...product};
    //   }

    console.log('Product changed', product);
  }

  updateCount(){
    this.count = this.count + 1;

  }

  updateValue(){
    this.value = this.value + 1;
  }
}


// parent - child : @Input()
// child - parent : @Output()
// read child component on the template of parent component - child : Temp Ref Variable #abc
// read child component on the class of parent component - parent : @ViewChild 