import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CocheAddComponent } from './coche-add.component';

describe('CocheAddComponent', () => {
  let component: CocheAddComponent;
  let fixture: ComponentFixture<CocheAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CocheAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CocheAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
