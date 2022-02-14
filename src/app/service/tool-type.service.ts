import {Injectable} from "@angular/core";
import {HttpService} from "./http.service";
import {ToolType} from "../model/model";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ToolTypeService extends HttpService<ToolType> {

  constructor(private httpClient: HttpClient) {
    super(httpClient);
    this.setBaseUrl("/tool-types");
  }
}
