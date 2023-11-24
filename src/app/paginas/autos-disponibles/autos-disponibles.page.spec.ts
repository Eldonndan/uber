import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AutosDisponiblesPage } from './autos-disponibles.page';

describe('AutosDisponiblesPage', () => {
  let component: AutosDisponiblesPage;
  let fixture: ComponentFixture<AutosDisponiblesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AutosDisponiblesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
