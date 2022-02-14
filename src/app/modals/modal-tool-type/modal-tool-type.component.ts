import {Component} from '@angular/core';
import {ToolType} from "../../model/model";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-modal-tool-type',
  templateUrl: './modal-tool-type.component.html',
  styleUrls: ['./modal-tool-type.component.css']
})
export class ModalToolTypeComponent {

  editToolType: ToolType = new ToolType();

  constructor(private modalService: NgbModal,
              private modal: NgbActiveModal) {
  }

  close() {
    this.modal.close(this.editToolType);
  }

}
