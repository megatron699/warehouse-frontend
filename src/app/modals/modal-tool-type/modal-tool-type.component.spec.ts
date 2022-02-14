import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalToolTypeComponent } from './modal-tool-type.component';

describe('ModalToolTypeComponent', () => {
  let component: ModalToolTypeComponent;
  let fixture: ComponentFixture<ModalToolTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalToolTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalToolTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
