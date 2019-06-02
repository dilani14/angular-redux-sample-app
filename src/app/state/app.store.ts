import { Employee } from '../models/employee';
import { combineReducers } from 'redux';
import { employeeReducer } from './reducers/employee.reducer';
import { filterReducer } from './reducers/filter.reducer';
import { EmployeeFilterOptions } from './actions/filter.actions';

export interface IAppState {
    employees: Employee[];
    filterOption: EmployeeFilterOptions;
}

export const INITIAL_STATE: IAppState = {
    employees: [],
    filterOption: EmployeeFilterOptions.AllEmployees
};

export const appReducer = combineReducers({
    employees: employeeReducer,
    filterOption: filterReducer
});

