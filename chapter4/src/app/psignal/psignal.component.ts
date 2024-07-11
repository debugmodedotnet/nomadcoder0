import { Component, OnChanges, SimpleChanges, input } from '@angular/core';

@Component({
  selector: 'app-psignal',
  standalone: true,
  imports: [],
  templateUrl: './psignal.component.html',
  styleUrl: './psignal.component.scss'
})
export class PsignalComponent implements OnChanges {
 
  
  value = input(0);


  ngOnChanges(changes: SimpleChanges): void {
      console.log(this.value());
  }


}
