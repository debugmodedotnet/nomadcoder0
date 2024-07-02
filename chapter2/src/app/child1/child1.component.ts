import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.scss',
})
export class Child1Component implements OnInit, OnChanges {
  @Input() data: any;
  @Input() a: any;
  @Input() b: any;
  showParentDiv = false;
  @Output() showParentDivEvent = new EventEmitter<boolean>();

  constructor() {
    console.log('constructor of child1');
  }

  ngOnInit(): void {
    console.log('ngOnInit of child1');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.data.count);
  }

  updateParent() {
    console.log('updateParent');
    this.showParentDiv = !this.showParentDiv;
    this.showParentDivEvent.emit(this.showParentDiv);
  }
}
