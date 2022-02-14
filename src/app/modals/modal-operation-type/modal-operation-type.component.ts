import {Component} from '@angular/core';
import {OperationType} from "../../model/model";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-modal-operation-type',
  templateUrl: './modal-operation-type.component.html',
  styleUrls: ['./modal-operation-type.component.css']
})
export class ModalOperationTypeComponent {

  editOperationType: OperationType = new OperationType();

  constructor(private modalService: NgbModal,
              private modal: NgbActiveModal) {
  }

  close() {
    console.log
    this.modal.close(this.editOperationType);
  }

}
