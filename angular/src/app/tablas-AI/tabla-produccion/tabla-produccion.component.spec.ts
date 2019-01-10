import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaProduccionComponent } from './tabla-produccion.component';

describe('TablaProduccionComponent', () => {
  let component: TablaProduccionComponent;
  let fixture: ComponentFixture<TablaProduccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaProduccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaProduccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
