import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalToolComponent } from './modal-tool.component';

describe('ModalToolComponent', () => {
  let component: ModalToolComponent;
  let fixture: ComponentFixture<ModalToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
