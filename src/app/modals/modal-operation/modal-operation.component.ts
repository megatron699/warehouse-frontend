import {Component, OnInit} from '@angular/core';
import {Operation} from "../../model/model";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ToolWarehouseService} from "../../service/tool-warehouse.service";
import {EmployeeService} from "../../service/employee.service";
import {OperationTypeService} from "../../service/operation-type.service";
import {ToolService} from "../../service/tool.service";

@Component({
  selector: 'app-modal-operation',
  templateUrl: './modal-operation.component.html',
  styleUrls: ['./modal-operation.component.css'],
  providers: [ToolWarehouseService, EmployeeService, OperationTypeService, ToolService]
})
export class ModalOperationComponent implements OnInit {

  editOperation: Operation = new Operation();
  toolWarehouseOptions: any = [];
  employeeOptions: any = [];
  toolOptions: any = [];
  operationTypeOptions: any = [];
  constructor(private modalService: NgbModal,
              private toolWarehouseService: ToolWarehouseService,
              private employeeService: EmployeeService,
              private toolService: ToolService,
              private operationTypeService: OperationTypeService,
              private modal: NgbActiveModal) {
  }

  ngOnInit() {
    this.toolWarehouseService.getData().subscribe(items => {
      this.toolWarehouseOptions = items;
    });
    this.employeeService.getData().subscribe(items => {
      this.employeeOptions = items;
    });
    this.toolService.getData().subscribe(items => {
      this.toolOptions = items;
    });
    this.operationTypeService.getData().subscribe(items => {
      this.operationTypeOptions = items;
    });
  }

  close() {
    this.editOperation.toolWarehouse = this.toolWarehouseOptions.find((i: any) => i.id = this.editOperation.toolWarehouse);
    this.editOperation.employee = this.employeeOptions.find((i: any) => i.id = this.editOperation.employee);
    this.editOperation.tool = this.toolOptions.find((i: any) => i.id = this.editOperation.tool);
    this.editOperation.operationType = this.operationTypeOptions.find((i: any) => i.id = this.editOperation.operationType);
    console.log(this.editOperation);
    this.modal.close(this.editOperation);
  }
}
