import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child1Component } from './child1/child1.component';
import { ProductComponent } from './product/product.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Child1Component, ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Chapter 3';
  count = {
    counter: 99,
  };

  isMessage = false; 
  updateCount(): void {
    let c = this.count.counter + 1;
    this.count = {
      counter: c,
    };
  }

  showMessage(flag:boolean){
    this.isMessage = flag;
  }
}
