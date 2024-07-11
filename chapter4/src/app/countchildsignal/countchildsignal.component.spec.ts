import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountchildsignalComponent } from './countchildsignal.component';

describe('CountchildsignalComponent', () => {
  let component: CountchildsignalComponent;
  let fixture: ComponentFixture<CountchildsignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountchildsignalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountchildsignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
