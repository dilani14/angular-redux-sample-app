import { Injectable } from '@angular/core';
import { AnyAction } from 'redux';
import { Employee } from '../../models/employee';

@Injectable()
export class EmployeeActions {
    static ADD_EMPLOYEE = 'ADD_EMPLOYEE';
    static DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';

    addEmployee(emp: Employee): AnyAction {
        return { type: EmployeeActions.ADD_EMPLOYEE, employee: emp };
    }

    deleteEmployee(empId: number): AnyAction {
        return { type: EmployeeActions.DELETE_EMPLOYEE, id: empId };
    }
}
