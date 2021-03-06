import { NgRedux } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { AppActions } from 'src/app/state/app.actions';
import { IAppState } from 'src/app/state/app.store';

@Component({
  selector: 'app-employee-filter',
  templateUrl: './employee-filter.component.html',
  styleUrls: ['./employee-filter.component.css']
})
export class EmployeeFilterComponent implements OnInit {
  ALL = 'ALL';
  PERMENANT = 'PERMENANT';
  TEMPORARY = 'TEMPORARY';

  filterType = '';

  constructor(private ngRedux: NgRedux<IAppState>, private appActions: AppActions) { }

  ngOnInit() {
    this.filterType = this.ngRedux.getState().filterOption;
  }

  onFilterChange() {
    this.ngRedux.dispatch(this.appActions.setEmployeeFilter(this.filterType));
  }

}
