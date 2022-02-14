import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import {HttpClient} from '@angular/common/http';
import {OperationType} from "../model/model";

@Injectable()
export class OperationTypeService extends HttpService<OperationType> {

  constructor(private client: HttpClient) {
    super(client);
    this.setBaseUrl("/operation-types");
  }

}
