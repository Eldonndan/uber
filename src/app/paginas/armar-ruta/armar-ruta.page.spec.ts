import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArmarRutaPage } from './armar-ruta.page';

describe('ArmarRutaPage', () => {
  let component: ArmarRutaPage;
  let fixture: ComponentFixture<ArmarRutaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ArmarRutaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
