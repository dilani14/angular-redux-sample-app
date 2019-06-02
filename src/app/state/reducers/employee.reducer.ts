import { EmployeeActions } from '../actions/employee.actions';
import { AnyAction } from 'redux';

export function employeeReducer(state = [], action: AnyAction) {
    switch (action.type) {

        case EmployeeActions.ADD_EMPLOYEE:
            action.employee.id = state.length + 1;
            return state.concat(Object.assign({}, action.employee));

        case EmployeeActions.DELETE_EMPLOYEE:
            return state.filter(t => t.id !== action.id);

        default:
            return state;
    }
}
