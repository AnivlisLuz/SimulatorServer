import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablBalanceGeneralComponent } from './tabl-balance-general.component';

describe('TablBalanceGeneralComponent', () => {
  let component: TablBalanceGeneralComponent;
  let fixture: ComponentFixture<TablBalanceGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TablBalanceGeneralComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablBalanceGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
