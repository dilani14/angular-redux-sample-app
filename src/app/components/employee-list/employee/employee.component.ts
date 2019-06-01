import { NgRedux } from '@angular-redux/store';
import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { IAppState } from 'src/app/state/app.store';
import { AppActions } from 'src/app/state/app.actions';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  @Input() employee: Employee;

  constructor(private ngRedux: NgRedux<IAppState>, private appActions: AppActions) { }

  ngOnInit() {
  }

  deleteEmployee() {
    this.ngRedux.dispatch(this.appActions.deleteEmployee(this.employee.id));
  }
}
