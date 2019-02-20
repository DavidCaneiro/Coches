import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CocheDetalleComponent } from './coche-detalle.component';

describe('CocheDetalleComponent', () => {
  let component: CocheDetalleComponent;
  let fixture: ComponentFixture<CocheDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CocheDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CocheDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
