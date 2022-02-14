import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import {HttpClient} from '@angular/common/http';
import {Employee} from "../model/model";


@Injectable()
export class EmployeeService extends HttpService<Employee> {

  constructor(private httpClient: HttpClient) {
    super(httpClient);
    this.setBaseUrl("/employees");
  }
}
