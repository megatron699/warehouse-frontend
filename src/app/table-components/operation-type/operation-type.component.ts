import {Component} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {OperationTypeService} from '../../service/operation-type.service';
import {EntityRequest} from '../../model/EntityRequest';
import {OperationType} from "../../model/model";
import {ModalOperationTypeComponent} from "../../modals/modal-operation-type/modal-operation-type.component";

@Component({
  selector: 'app-operation-types',
  templateUrl: './operation-type.component.html',
  styleUrls: ['../table.button.css'],
  providers: [OperationTypeService]
})

export class OperationTypeComponent extends EntityRequest<OperationType> {
  columnList: Array<string> = [
    "#",
    "Тип операции"
  ];


  constructor(private operationTypeService: OperationTypeService,
              private modalService: NgbModal) {
    super(operationTypeService);
  }

  addOperationType() {
    const modelRef = this.modalService.open(ModalOperationTypeComponent, {
      backdrop: "static",
      centered: true,
      keyboard: false
    });

    this.elementRequest(modelRef);
  }

  editOperationType(element: OperationType) {
    const modelRef = this.modalService.open(ModalOperationTypeComponent, {centered: true, keyboard: false});

    modelRef.componentInstance.editOperationType = Object.assign({}, element);

    this.elementRequest(modelRef, element);
  }

  delete(element: OperationType) {
    super.delete(element, this.modalService);
  }

}
