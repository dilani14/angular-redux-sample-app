import { FilterActions, EmployeeFilterOptions } from '../actions/filter.actions';
import { AnyAction } from 'redux';

export function filterReducer(state = EmployeeFilterOptions.AllEmployees, action: AnyAction) {
    switch (action.type) {

        case FilterActions.SET_EMPLOYEE_FILTER:
            return action.option;

        default:
            return state;
    }
}
