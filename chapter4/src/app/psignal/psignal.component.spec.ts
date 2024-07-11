import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsignalComponent } from './psignal.component';

describe('PsignalComponent', () => {
  let component: PsignalComponent;
  let fixture: ComponentFixture<PsignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsignalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PsignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
