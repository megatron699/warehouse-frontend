import {Component, OnInit} from '@angular/core';
import {Tool} from "../../model/model";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ToolTypeService} from "../../service/tool-type.service";

@Component({
  selector: 'app-modal-tool',
  templateUrl: './modal-tool.component.html',
  styleUrls: ['./modal-tool.component.css'],
  providers: [ToolTypeService]
})
export class ModalToolComponent implements OnInit{

  editTool: Tool = new Tool();
  options: any = [];
  constructor(private modalService: NgbModal,
              private toolTypeService: ToolTypeService,
              private modal: NgbActiveModal) {
  }

  ngOnInit() {
    this.toolTypeService.getData().subscribe(items => {
      this.options = items;
    });
  }

  close() {
    this.editTool.toolType = this.options.find((i: any) => i.id = this.editTool.toolType);
    this.modal.close(this.editTool);
  }
}
