import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from 'src/app/state/app.store';
import { AppActions } from 'src/app/state/app.actions';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  IS_PERMENANT = 'IS_PERMENANT';
  IS_TEMPORARY = 'IS_TEMPORARY';

  employeeType: string;

  newEmployee: Employee = {
    id: 0,
    name: '',
    age: null,
    salary: null,
    isPermanent: true
  };

  constructor(private ngRedux: NgRedux<IAppState>, private appActions: AppActions) { }

  ngOnInit() {

  }

  onSubmit() {
    this.newEmployee.isPermanent = this.employeeType === this.IS_PERMENANT;

    this.ngRedux.dispatch(this.appActions.addEmployee(this.newEmployee));

    this.clearEmployee();
  }

  clearEmployee() {
    this.newEmployee.name = '';
    this.newEmployee.age = null;
    this.newEmployee.salary = null;
    this.employeeType = '';
  }
}
