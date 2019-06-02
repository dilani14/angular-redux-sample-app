import { Injectable } from '@angular/core';
import { AnyAction } from 'redux';

@Injectable()
export class FilterActions {
    static SET_EMPLOYEE_FILTER = 'SET_EMPLOYEE_FILTER';

    setEmployeeFilter(filter: string): AnyAction {
        return { type: FilterActions.SET_EMPLOYEE_FILTER, option: filter };
    }
}

export enum EmployeeFilterOptions {
    AllEmployees = 'ALL',
    Permanant = 'PERMENANT',
    TEMPORARY = 'TEMPORARY'
}
