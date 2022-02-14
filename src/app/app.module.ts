import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NavMenuComponent} from './nav-menu/nav-menu.component';

import {RouterModule} from '@angular/router';
import {ToolComponent} from './table-components/tool/tool.component';
import {OperationTypeComponent} from './table-components/operation-type/operation-type.component';
import {OperationComponent} from './table-components/operation/operation.component';
import {EmployeeComponent} from './table-components/employee/employee.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {EntityRequest} from './model/EntityRequest';
import {DeleteComponent} from './delete/delete.component';
import {ToolTypesComponent} from './table-components/tool-type/tool-types.component';
import {ToolWarehousesComponent} from './table-components/tool-warehouses/tool-warehouses.component';
import {ModalEmployeeComponent} from './modals/modal-employee/modal-employee.component';
import {ModalOperationComponent} from './modals/modal-operation/modal-operation.component';
import {ModalOperationTypeComponent} from './modals/modal-operation-type/modal-operation-type.component';
import {ModalToolComponent} from './modals/modal-tool/modal-tool.component';
import {ModalToolTypeComponent} from './modals/modal-tool-type/modal-tool-type.component';
import {ModalToolWarehousesComponent} from './modals/modal-tool-warehouses/modal-tool-warehouses.component';
import { SignInComponent } from './signin/sign-in.component';
import {AuthService} from "./service/auth.service";
import {LoginActivate} from "./service/login-activate.service";


@NgModule({
  declarations: [
    NavMenuComponent,
    AppComponent,
    ToolComponent,
    OperationTypeComponent,
    OperationComponent,
    EmployeeComponent,
    DeleteComponent,
    ToolTypesComponent,
    ToolWarehousesComponent,
    ModalEmployeeComponent,
    ModalOperationComponent,
    ModalOperationTypeComponent,
    ModalToolComponent,
    ModalToolTypeComponent,
    ModalToolWarehousesComponent,
    SignInComponent
  ],


  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule

  ],

  entryComponents: [
    DeleteComponent,
    ModalEmployeeComponent,
    ModalOperationComponent,
    ModalOperationTypeComponent,
    ModalToolComponent,
    ModalToolTypeComponent,
    ModalToolWarehousesComponent
  ],

  providers: [EntityRequest, AuthService, LoginActivate],
  bootstrap: [AppComponent, NavMenuComponent]

})
export class AppModule {
}
