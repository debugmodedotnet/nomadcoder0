import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountComponent } from './count.component';

describe('CountComponent', () => {
  let component: CountComponent;
  let fixture: ComponentFixture<CountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
