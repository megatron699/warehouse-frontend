import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalToolWarehousesComponent } from './modal-tool-warehouses.component';

describe('ModalToolWarehousesComponent', () => {
  let component: ModalToolWarehousesComponent;
  let fixture: ComponentFixture<ModalToolWarehousesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalToolWarehousesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalToolWarehousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
