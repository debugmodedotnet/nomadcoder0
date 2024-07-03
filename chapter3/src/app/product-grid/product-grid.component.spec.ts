import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGridComponent } from './product-grid.component';

describe('ProductGridComponent', () => {
  let component: ProductGridComponent;
  let fixture: ComponentFixture<ProductGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
