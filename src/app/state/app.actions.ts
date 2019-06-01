import { Injectable } from '@angular/core';
import { AnyAction } from 'redux';
import { Employee } from '../models/employee';

@Injectable()
export class AppActions {
    static SET_EMPLOYEE_FILTER = 'SET_EMPLOYEE_FILTER';
    static ADD_EMPLOYEE = 'ADD_EMPLOYEE';
    static DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';

    addEmployee(emp: Employee): AnyAction {
        return { type: AppActions.ADD_EMPLOYEE, employee: emp };
    }

    deleteEmployee(empId: number): AnyAction {
        return { type: AppActions.DELETE_EMPLOYEE, id: empId };
    }

    setEmployeeFilter(filter: string) {
        return { type: AppActions.SET_EMPLOYEE_FILTER, option: filter };
    }
}

export enum EmployeeFilterOptions {
    AllEmployees = 'ALL',
    Permanant = 'PERMENANT',
    TEMPORARY = 'TEMPORARY'
}
