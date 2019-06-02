import { NgRedux } from '@angular-redux/store';
import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeeActions } from 'src/app/state/actions/employee.actions';
import { IAppState } from 'src/app/state/app.store';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  @Input() employee: Employee;

  constructor(private ngRedux: NgRedux<IAppState>, private empActions: EmployeeActions) { }

  ngOnInit() {
  }

  deleteEmployee() {
    this.ngRedux.dispatch(this.empActions.deleteEmployee(this.employee.id));
  }
}
