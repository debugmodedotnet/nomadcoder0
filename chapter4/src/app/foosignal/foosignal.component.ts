import { Component, OnChanges, Signal,  SimpleChanges, WritableSignal, computed, effect, input, model } from '@angular/core';
import { IProduct } from '../product';

function foo(n:number): number{
  return n + 100;

}
@Component({
  selector: 'app-foosignal',
  standalone: true,
  imports: [],
  templateUrl: './foosignal.component.html',
  styleUrl: './foosignal.component.scss',
})
export class FoosignalComponent implements OnChanges {
  product = model.required<IProduct>();
  count = model.required<number>();
  value: any = input(10,{ transform :foo});

  // disabled = input(false, {
  //   transform: (value: boolean | string) => (typeof value === 'string' ? value === '' : value),
  // });

  isCountEven : Signal<boolean> = computed(() => {
    return this.value() % 2 === 0;
  });
  constructor(){
    effect(() => {
      console.log('value changed', this.value());
    });
  }

  updateProduct() {
    this.product.update((p: IProduct) => {
      if (p) {
        return { id: p.id, name: p.name, price: p.price + 1 };
      }
      return p;
    });
  }
  updateCount() {
    this.count.update((c: number) => {
      return c + 1;
    });
  }


  ngOnChanges(changes: SimpleChanges): void {
      console.log('count changed',this.value());
  }
}
