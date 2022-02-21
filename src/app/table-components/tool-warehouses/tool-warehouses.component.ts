import {Component, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ToolWarehouse} from "../../model/model";
import {EntityRequest} from "../../model/EntityRequest";
import {ToolWarehouseService} from "../../service/tool-warehouse.service";
import {ModalToolWarehousesComponent} from "../../modals/modal-tool-warehouses/modal-tool-warehouses.component";
import {LoginService} from "../../service/login.service";

@Component({
  selector: 'app-tool-warehouses',
  templateUrl: './tool-warehouses.component.html',
  styleUrls: ['../table.button.css'],
  providers: [ToolWarehouseService]
})
export class ToolWarehousesComponent extends EntityRequest<ToolWarehouse> implements OnInit {

  columnList: Array<string> = [
    "#",
    "Название склада"
  ];

  constructor(private operationService: ToolWarehouseService,
              private modalService: NgbModal,
              private loginService: LoginService) {
    super(operationService);
  }

  addToolWarehouse() {
    const modelRef = this.modalService.open(ModalToolWarehousesComponent, {
      backdrop: "static",
      centered: true,
      keyboard: false
    });

    this.elementRequest(modelRef);
  }

  editToolWarehouse(element: ToolWarehouse) {
    const modelRef = this.modalService.open(ModalToolWarehousesComponent, {
      backdrop: "static",
      centered: true,
      keyboard: false
    });

    modelRef.componentInstance.editToolWarehouse = Object.assign({}, element);

    this.elementRequest(modelRef, element);
  }

  delete(element: ToolWarehouse) {
    super.delete(element, this.modalService);
  }

  isAdmin() {
    const login = this.loginService.login();
    if (login) {
      return  login.showAdmin;
    }
  }
}
