import { Injectable, WritableSignal, signal } from '@angular/core';
import { IProduct } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  private count = 90;
  public Count$ : WritableSignal<number> = signal(this.count);

  constructor() { 
  }

  updateCount(c:number){
     this.Count$.set(c);
  }
}
