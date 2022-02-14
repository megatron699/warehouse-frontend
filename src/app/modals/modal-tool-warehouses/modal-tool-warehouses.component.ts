import {Component} from '@angular/core';
import {ToolWarehouse} from "../../model/model";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-modal-tool-warehouses',
  templateUrl: './modal-tool-warehouses.component.html',
  styleUrls: ['./modal-tool-warehouses.component.css']
})
export class ModalToolWarehousesComponent {

  editToolWarehouse: ToolWarehouse = new ToolWarehouse();

  constructor(private modalService: NgbModal,
              private modal: NgbActiveModal) {
  }

  close() {
    this.modal.close(this.editToolWarehouse);
  }

}
