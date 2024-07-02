import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child1Component } from './child1.component';

describe('Child1Component', () => {
  let component: Child1Component;
  let fixture: ComponentFixture<Child1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Child1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Child1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
