import {Component} from '@angular/core';
import {OperationService} from '../../service/operation.service';
import {EntityRequest} from '../../model/EntityRequest';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Operation} from "../../model/model";
import {ModalOperationComponent} from "../../modals/modal-operation/modal-operation.component";

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['../table.button.css'],
  providers: [OperationService]
})
export class OperationComponent extends EntityRequest<Operation> {
  columnList: Array<string> = [
    "#",
    "Тип операции",
    "Дата операции",
    "Фамилия работника",
    "Имя работника",
    "Количество",
    "Название инструмента",
    "Название склада"
  ];

  constructor(private operationService: OperationService,
              private  modalService: NgbModal) {
    super(operationService);
  }

  addOperation() {
    const modelRef = this.modalService.open(ModalOperationComponent, {
      backdrop: "static",
      centered: true,
      keyboard: false
    });

    this.elementRequest(modelRef);
  }

  editOperation(element: Operation) {
    const modelRef = this.modalService.open(ModalOperationComponent, {
      backdrop: "static",
      centered: true,
      keyboard: false
    });

    modelRef.componentInstance.editOperation = Object.assign({}, element);

    this.elementRequest(modelRef, element);
  }

  delete(element: Operation) {
    super.delete(element, this.modalService);
  }


}
