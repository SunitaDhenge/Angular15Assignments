import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleForm2Component } from './vehicle-form2.component';

describe('VehicleForm2Component', () => {
  let component: VehicleForm2Component;
  let fixture: ComponentFixture<VehicleForm2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleForm2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
