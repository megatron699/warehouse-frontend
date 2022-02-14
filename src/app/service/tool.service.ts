import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import {HttpClient} from '@angular/common/http';
import {Tool} from "../model/model";


@Injectable()
export class ToolService extends HttpService<Tool> {

  constructor(private httpClient: HttpClient) {
    super(httpClient);
    this.setBaseUrl("/tools");
  }
}
