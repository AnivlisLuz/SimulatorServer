import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablVentasComponent } from './tabl-ventas.component';

describe('TablVentasComponent', () => {
  let component: TablVentasComponent;
  let fixture: ComponentFixture<TablVentasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TablVentasComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
