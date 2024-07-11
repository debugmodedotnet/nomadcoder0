import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountchildComponent } from './countchild.component';

describe('CountchildComponent', () => {
  let component: CountchildComponent;
  let fixture: ComponentFixture<CountchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountchildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
