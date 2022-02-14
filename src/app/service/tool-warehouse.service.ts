import {Injectable} from "@angular/core";
import {HttpService} from "./http.service";
import {ToolWarehouse} from "../model/model";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ToolWarehouseService extends HttpService<ToolWarehouse> {

  constructor(private httpClient: HttpClient) {
    super(httpClient);
    this.setBaseUrl("/tool-warehouses");
  }
}
