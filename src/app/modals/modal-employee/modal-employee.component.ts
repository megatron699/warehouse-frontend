import {Component, OnInit} from '@angular/core';
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Employee} from "../../model/model";
import {ToolWarehouseService} from "../../service/tool-warehouse.service";

@Component({
  selector: 'app-modal-employee',
  templateUrl: './modal-employee.component.html',
  styleUrls: ['./modal-employee.component.css'],
  providers: [ToolWarehouseService]
})
export class ModalEmployeeComponent implements OnInit{

  editEmployee: Employee = new Employee();
  options: any = [];

  constructor(private modalService: NgbModal,
              private toolWarehouseService: ToolWarehouseService,
              private modal: NgbActiveModal) {
  }

  ngOnInit() {
    this.toolWarehouseService.getData().subscribe(items => {
      this.options = items;
    });
  }

  close() {
    this.editEmployee.toolWarehouse = this.options.find((i: any) => i.id = this.editEmployee.toolWarehouse);
    this.modal.close(this.editEmployee);
  }

}
