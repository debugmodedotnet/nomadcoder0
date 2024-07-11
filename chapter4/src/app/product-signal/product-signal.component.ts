import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
  model,
} from '@angular/core';
import { IProduct } from '../product';
import { CurrencyPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-product-signal',
  standalone: true,
  imports: [NgIf, CurrencyPipe],
  templateUrl: './product-signal.component.html',
  styleUrl: './product-signal.component.scss',
})
export class ProductSignalComponent {
  @Input() product?: IProduct;
  product$ = model<IProduct>();

  @Output() productChange = new EventEmitter<IProduct>();

  notify(p: IProduct) {
    p.price = p.price + 100;
    this.productChange.emit(p);
  }

  notify1() {
    let p: IProduct = {
      id: 1,
      name: 'Product 1',
      price: 200,
    };
    this.product$.set(p);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.product);
  }

  ngOnInit(): void {}
}
