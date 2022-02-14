import {Component} from '@angular/core';
import {EntityRequest} from '../../model/EntityRequest';
import {EmployeeService} from '../../service/employee.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Employee} from "../../model/model";
import {ModalEmployeeComponent} from "../../modals/modal-employee/modal-employee.component";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['../table.button.css'],
  providers: [EmployeeService]
})

export class EmployeeComponent extends EntityRequest<Employee> {
  columnList: Array<string> = [
    "#",
    "Фамилия",
    "Имя",
    "Отчество",
    "Должность",
    "Название склада"
  ];

  constructor(private employeeService: EmployeeService,
              private  modalService: NgbModal) {
    super(employeeService);
  }

  addEmployee() {
    const modelRef = this.modalService.open(ModalEmployeeComponent, {backdrop: "static", centered: true, keyboard: false});

    this.elementRequest(modelRef);
  }

  editEmployee(element: Employee) {
    const modelRef = this.modalService.open(ModalEmployeeComponent, {centered: true, keyboard: false});

    modelRef.componentInstance.editEmployee = Object.assign({}, element);

    this.elementRequest(modelRef, element);
  }

  delete(element: Employee) {
    super.delete(element, this.modalService);
  }


}
