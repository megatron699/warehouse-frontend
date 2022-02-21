import {Component, OnInit} from '@angular/core';
import {EntityRequest} from '../../model/EntityRequest';
import {EmployeeService} from '../../service/employee.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Employee} from "../../model/model";
import {ModalEmployeeComponent} from "../../modals/modal-employee/modal-employee.component";
import {LoginActivate} from "../../service/login-activate.service";
import {LoginService} from "../../service/login.service";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['../table.button.css'],
  providers: [EmployeeService]
})

export class EmployeeComponent extends EntityRequest<Employee> implements OnInit {
  columnList: Array<string> = [
    "#",
    "Фамилия",
    "Имя",
    "Отчество",
    "Должность",
    "Название склада"
  ];

  constructor(private employeeService: EmployeeService,
              private  modalService: NgbModal,
              private loginService: LoginService) {
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

  ngOnInit() {
    const login = this.loginService.login();
    if (login) {
      this.getAll();
    }
  }

  isAdmin() {
    const login = this.loginService.login();
    if (login) {
      return  login.showAdmin;
    }
  }
}
