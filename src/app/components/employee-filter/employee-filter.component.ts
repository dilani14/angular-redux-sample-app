import { NgRedux } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { IAppState } from 'src/app/state/app.store';
import { FilterActions } from 'src/app/state/actions/filter.actions';

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

  constructor(private ngRedux: NgRedux<IAppState>, private filterActions: FilterActions) { }

  ngOnInit() {
    this.filterType = this.ngRedux.getState().filterOption;
  }

  onFilterChange() {
    this.ngRedux.dispatch(this.filterActions.setEmployeeFilter(this.filterType));
  }

}
