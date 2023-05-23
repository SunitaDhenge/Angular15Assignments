import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleForm1Component } from './vehicle-form1.component';

describe('VehicleForm1Component', () => {
  let component: VehicleForm1Component;
  let fixture: ComponentFixture<VehicleForm1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleForm1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
