import {Component} from '@angular/core';
import {EmployeeService} from '../../service/employee.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ToolService} from '../../service/tool.service';
import {EntityRequest} from '../../model/EntityRequest';
import {OperationService} from '../../service/operation.service';
import {OperationTypeService} from '../../service/operation-type.service';
import {Tool} from "../../model/model";
import {ModalToolComponent} from "../../modals/modal-tool/modal-tool.component";
import {LoginService} from "../../service/login.service";

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['../table.button.css'],
  providers: [ToolService, EmployeeService, OperationService, OperationTypeService]
})

export class ToolComponent extends EntityRequest<Tool> {

  columnList: Array<string> = [
    '#',
    "Название инструмента",
    "Производитель",
    "Тип инструмента"
  ];

  constructor(private contractService: ToolService,
              private agentService: EmployeeService,
              private branchService: OperationService,
              private tariffService: OperationTypeService,
              private modalService: NgbModal,
              private loginService: LoginService) {
    super(contractService);

  }


  addTool() {
    const modelRef = this.modalService.open(ModalToolComponent, {
      backdrop: 'static',
      centered: true,
      keyboard: false
    });

    this.elementRequest(modelRef);
  }

  editTool(element: Tool) {
    const modelRef = this.modalService.open(ModalToolComponent, {
      backdrop: "static",
      centered: true,
      keyboard: false
    });

    modelRef.componentInstance.editTool = Object.assign({}, element);

    this.elementRequest(modelRef, element);
  }

  delete(element: Tool) {
    super.delete(element, this.modalService);
  }

  isAdmin() {
    const login = this.loginService.login();
    if (login) {
      return login.showAdmin;
    }
  }
}
