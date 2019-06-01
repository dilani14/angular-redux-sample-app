import { Employee } from '../models/employee';
import { AppActions, EmployeeFilterOptions } from './app.actions';

export interface IAppState {
    employees: Employee[];
    filterOption: EmployeeFilterOptions;
}

export const INITIAL_STATE: IAppState = {
    employees: [],
    filterOption: EmployeeFilterOptions.AllEmployees
};

export function appReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case AppActions.SET_EMPLOYEE_FILTER:
            return Object.assign({}, state, {
                filterOption: action.option
            } as IAppState);

        case AppActions.ADD_EMPLOYEE:
            action.employee.id = state.employees.length + 1;
            return Object.assign({}, state, {
                employees: state.employees.concat(Object.assign({}, action.employee))
            } as IAppState);

        case AppActions.DELETE_EMPLOYEE:
            return Object.assign({}, state, {
                employees: state.employees.filter(t => t.id !== action.id),
            } as IAppState);

        default:
            return state;
    }
}
