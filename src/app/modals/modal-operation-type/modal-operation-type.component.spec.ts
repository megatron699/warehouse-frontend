import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalOperationTypeComponent } from './modal-operation-type.component';

describe('ModalOperationTypeComponent', () => {
  let component: ModalOperationTypeComponent;
  let fixture: ComponentFixture<ModalOperationTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalOperationTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalOperationTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
