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
  @Input() count: any;
  @Input() a: any;
  @Input() b: any;
  isMessage = false;

  @Output() isMessageEvent = new EventEmitter<boolean>();

  constructor() {
    console.log('Child1Component constructor called');
  }

  ngOnInit(): void {
    console.log('Child1Component ngOnInit called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Child1Component ngOnChanges called');
    console.log(changes);
  }

  showMessage(): void {
    this.isMessage = !this.isMessage;
    this.isMessageEvent.emit(this.isMessage);
  }
}
