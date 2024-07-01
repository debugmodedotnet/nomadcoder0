// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet, FormsModule],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss'
// })
// export class AppComponent {
//   title = 'chapter1';
//   counter = 99; // API/ DB/CLOUD
//   height = 150; // API
//   w = 150; // api

//   setDefault(){
//     this.height = 150;
//     this.w = 150;
//     console.log('setDefault');
//   }
// }

import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { IProduct } from './product';
import { CurrencyPipe, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { ProductSearchPipe } from './product-search.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgFor, NgIf, UpperCasePipe, CurrencyPipe, ProductSearchPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
   title= "Products"; 
   products: IProduct[] = [];
   searchText = "";

  constructor(){
    
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.products = this.getProducts();
    }, 10000);
  
    console.log(this.products);
  }
  

  getProducts(): IProduct[] {
    // hitting an api
    // takinf 5 second to get the data
    return [
      { Id: '1', Title: 'Samsung', Price: 1000, Color: 'Black', Quantity: 10 },
      { Id: '2', Title: 'Apple', Price: 2000, Color: 'Red', Quantity: 20 },
      { Id: '3', Title: 'OnePlus', Price: 3000, Color: 'Red', Quantity: 30 },
      { Id: '4', Title: 'Vivo', Price: 4000, Color: 'Blue', Quantity: 40 },
      { Id: '5', Title: 'Oppo', Price: 5000, Color: 'Green', Quantity: 50 },
    ];
  }
}
