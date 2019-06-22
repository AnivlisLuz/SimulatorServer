import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaModeradorComponent } from './ventana-moderador.component';

describe('VentanaModeradorComponent', () => {
  let component: VentanaModeradorComponent;
  let fixture: ComponentFixture<VentanaModeradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentanaModeradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentanaModeradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
