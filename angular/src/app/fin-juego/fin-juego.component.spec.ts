import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinJuegoComponent } from './fin-juego.component';

describe('FinJuegoComponent', () => {
  let component: FinJuegoComponent;
  let fixture: ComponentFixture<FinJuegoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinJuegoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
