import {Component, OnInit} from '@angular/core';
import {EntityRequest} from "../../model/EntityRequest";
import {ToolType} from "../../model/model";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ToolTypeService} from "../../service/tool-type.service";
import {ModalToolTypeComponent} from "../../modals/modal-tool-type/modal-tool-type.component";

@Component({
  selector: 'app-tool-types',
  templateUrl: './tool-types.component.html',
  styleUrls: ['../table.button.css'],
  providers: [ToolTypeService]
})
export class ToolTypesComponent extends EntityRequest<ToolType> {

  columnList: Array<string> = [
    "#",
    "Тип инструмента"
    ];

  constructor(private operationService: ToolTypeService,
              private modalService: NgbModal) {
    super(operationService);
  }

  addToolType() {
    const modelRef = this.modalService.open(ModalToolTypeComponent, {
      backdrop: "static",
      centered: true,
      keyboard: false
    });

    this.elementRequest(modelRef);
  }

  editToolType(element: ToolType) {
    const modelRef = this.modalService.open(ModalToolTypeComponent, {
      backdrop: "static",
      centered: true,
      keyboard: false
    });

    modelRef.componentInstance.editToolType = Object.assign({}, element);

    this.elementRequest(modelRef, element);
  }

  delete(element: ToolType) {
    super.delete(element, this.modalService);
  }
}
