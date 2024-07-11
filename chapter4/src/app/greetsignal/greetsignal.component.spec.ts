import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetsignalComponent } from './greetsignal.component';

describe('GreetsignalComponent', () => {
  let component: GreetsignalComponent;
  let fixture: ComponentFixture<GreetsignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreetsignalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreetsignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
