import {HttpService} from './http.service';
import {HttpClient} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {Operation} from "../model/model";

@Injectable()
export class OperationService extends HttpService<Operation> {
  constructor(private httpClient: HttpClient) {
    super(httpClient);
    this.setBaseUrl("/operations");
  }
}
