import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesOverWarrantyComponent } from './vehicles-over-warranty.component';

describe('VehiclesOverWarrantyComponent', () => {
  let component: VehiclesOverWarrantyComponent;
  let fixture: ComponentFixture<VehiclesOverWarrantyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiclesOverWarrantyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesOverWarrantyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
