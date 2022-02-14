  import {EntityId} from './EntityId';
import {OnInit} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {HttpService} from '../service/http.service';
import {DeleteComponent} from '../delete/delete.component';


export class EntityRequest<T extends EntityId> implements OnInit {

  elements: T[] = [];

  constructor(private httpService: HttpService<T>) {
  }

  elementRequest(modelRef: NgbModalRef, oldElement: T = null) {
    modelRef.result.then(result => {
      if (result instanceof Object) {
        this.submit(result, oldElement);
      } else {
        console.log(result.toString());
      }
    });
  }

  getAll() {
    this.httpService
      .getData()
      .subscribe(data => this.elements = <T[]> data,
        error => console.log(error));
  }

  ngOnInit() {
    console.log(this.getAll());;
  }

  submit(element: T, oldElement: T = null) {
    this.httpService.postData(element)
      .subscribe(
        (data: T) => {
          let elementById = this.elements.filter(element => element.id === data.id);

          if (elementById.length === 0) {
            this.elements.push(data);
          } else {
            Object.assign(oldElement, data);
          }

        },
        error => console.log(error)
      );
  }

  delete(element: T, modalService: NgbModal) {
    const modelRef = modalService.open(DeleteComponent, {backdrop: "static", centered: true, keyboard: false});

    modelRef.result.then((result) => {
      if (result) {
        this.deleteRequest(element);
      }
    });
  }

  deleteRequest(element: T) {
    this.httpService.deleteData(element)
      .subscribe(
        (data: any) => {
          this.deleteById(element);
        }
      );
  }


  deleteById(element: T) {
    this.elements = this.elements.filter(obj => obj.id !== element.id);
  }
}
