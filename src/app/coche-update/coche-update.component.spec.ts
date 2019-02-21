import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CocheUpdateComponent } from './coche-update.component';

describe('CocheUpdateComponent', () => {
  let component: CocheUpdateComponent;
  let fixture: ComponentFixture<CocheUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CocheUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CocheUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
