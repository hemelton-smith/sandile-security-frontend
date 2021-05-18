import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesNearServiceComponent } from './vehicles-near-service.component';

describe('VehiclesNearServiceComponent', () => {
  let component: VehiclesNearServiceComponent;
  let fixture: ComponentFixture<VehiclesNearServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiclesNearServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesNearServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
