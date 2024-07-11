import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoosignalComponent } from './foosignal.component';

describe('FoosignalComponent', () => {
  let component: FoosignalComponent;
  let fixture: ComponentFixture<FoosignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoosignalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoosignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
