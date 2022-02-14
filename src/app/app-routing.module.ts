import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EmployeeComponent} from './table-components/employee/employee.component';
import {OperationComponent} from './table-components/operation/operation.component';
import {ToolComponent} from './table-components/tool/tool.component';
import {OperationTypeComponent} from './table-components/operation-type/operation-type.component';
import {ToolTypesComponent} from './table-components/tool-type/tool-types.component';
import {ToolWarehousesComponent} from './table-components/tool-warehouses/tool-warehouses.component';
import {LoginActivate} from "./service/login-activate.service";
import {SignInComponent} from "./signin/sign-in.component";

const routes: Routes = [
  {path: 'employees', component: EmployeeComponent, canActivate: [LoginActivate]},
  {path: 'operations', component: OperationComponent, canActivate: [LoginActivate]},
  {path: 'tools', component: ToolComponent, canActivate: [LoginActivate]},
  {path: 'operation-types', component: OperationTypeComponent, canActivate: [LoginActivate]},
  {path: 'tool-types', component: ToolTypesComponent, canActivate: [LoginActivate]},
  {path: 'tool-warehouses', component: ToolWarehousesComponent, canActivate: [LoginActivate]},
  {path: 'signin', component: SignInComponent},
  // {path: 'signup', component: SignUpComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'employees'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
