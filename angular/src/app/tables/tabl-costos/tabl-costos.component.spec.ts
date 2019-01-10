import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablCostosComponent } from './tabl-costos.component';

describe('TablCostosComponent', () => {
  let component: TablCostosComponent;
  let fixture: ComponentFixture<TablCostosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablCostosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablCostosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
