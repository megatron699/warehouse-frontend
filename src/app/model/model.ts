import {EntityId} from './EntityId';

export class Employee extends EntityId {
  lastName: string;
  firstName: string;
  patronymic: string;
  position: string;
  toolWarehouse: ToolWarehouse;

  constructor() {
    super();
    this.lastName = "";
    this.firstName = "";
    this.patronymic = "";
    this.position = "";
    this.toolWarehouse = new ToolWarehouse();
  }

}

export class Tool extends EntityId {
  toolName: string;
  manufacturer: string;
  toolType: ToolType;

  constructor() {
    super();
    this.toolName = "";
    this.manufacturer = "";
    this.toolType = new ToolType();
  }
}

export class Operation extends EntityId {
  operationDate: Date;
  amount: number;
  operationType: OperationType;
  employee: Employee;
  tool: Tool;
  toolWarehouse: ToolWarehouse;

  constructor() {
    super();
    this.operationDate = new Date();
    this.amount = 0;
    this.operationType = new OperationType();
    this.employee = new Employee();
    this.tool = new Tool();
    this.toolWarehouse = new ToolWarehouse();
  }

}
type operationTypeEnum = 'ISSUE' | 'RETURN' | 'LOSS';
export class OperationType extends EntityId {
  operationType: operationTypeEnum;

  constructor() {
    super();
    this.operationType = 'ISSUE';
  }

}

export class ToolType extends EntityId {
  toolType: string;

  constructor() {
    super();
    this.toolType = "";
  }
}

export class ToolWarehouse extends EntityId {
  warehouseName: string;

  constructor() {
    super();
    this.warehouseName = "";
  }
}
