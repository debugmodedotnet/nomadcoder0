import { Component } from '@angular/core';
import { Child11Component } from '../child11/child11.component';
import { Child12Component } from '../child12/child12.component';
import { Child1Component } from '../child1/child1.component';
import { Child2Component } from '../child2/child2.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [Child1Component, Child2Component],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  data = {
    count: 99,
  };
  a = 100;
  b = 200;
  isMessage = false;

  updateData() {
    let count = this.data.count + 1;
    this.data = {
      count: count,
    };
  }

  showMessage(data: boolean) {
    this.isMessage = data;
  }
}

// Passing data from Parent Component to Child Component

// Smart Component  ( Container Component)
// Dumb Component  ( Presentational Component)

// I need to display Product baseurl/proudct 
// Show as Grid 
// Show as List 
// ProductGridComponent @Input , @Output 
// ProductListComponent @Input, @Output