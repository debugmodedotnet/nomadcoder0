import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child12Component } from './child12.component';

describe('Child12Component', () => {
  let component: Child12Component;
  let fixture: ComponentFixture<Child12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Child12Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Child12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
