import {Injectable} from "@angular/core";
import {HttpService} from "./http.service";
import {OperationType, SignIn} from "../model/model";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class SigninService extends HttpService<SignIn> {

  constructor(private client: HttpClient) {
    super(client);
    this.setBaseUrl("/signin");
  }

}
