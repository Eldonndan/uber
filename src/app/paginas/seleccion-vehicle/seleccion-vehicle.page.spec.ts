import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeleccionVehiclePage } from './seleccion-vehicle.page';

describe('SeleccionVehiclePage', () => {
  let component: SeleccionVehiclePage;
  let fixture: ComponentFixture<SeleccionVehiclePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SeleccionVehiclePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
