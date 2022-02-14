import {Component} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {HttpService} from "./service/http.service";


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  providers: [NgbModal, HttpService]
})

export class AppComponent {
}

