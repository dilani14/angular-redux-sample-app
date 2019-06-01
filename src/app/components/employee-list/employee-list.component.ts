import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { IAppState } from 'src/app/state/app.store';
import { Observable, Subscription } from 'rxjs';
import { EmployeeFilterOptions } from 'src/app/state/app.actions';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit, OnDestroy {
  @select() employees$: Observable<Employee[]>;
  @select() filterOption$: Observable<EmployeeFilterOptions>;

  employeeSubscription: Subscription;
  employeeFilterSubscription: Subscription;

  selectedFilter: EmployeeFilterOptions;
  employeeList: Employee[];
  filterEmployeeList: Employee[];

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
    this.subscribeToStore();
  }

  ngOnDestroy() {
    this.employeeSubscription.unsubscribe();
    this.employeeFilterSubscription.unsubscribe();
  }

  subscribeToStore() {
    this.employeeSubscription = this.employees$.subscribe(
      employees => {
        if (employees) {
          this.employeeList = employees;
          this.filterEmployees();
        }
      }
    );

    this.employeeFilterSubscription = this.filterOption$.subscribe(
      filter => {
        this.selectedFilter = filter;
        this.filterEmployees();
      }
    );
  }

  filterEmployees() {
    this.selectedFilter = this.selectedFilter ? this.selectedFilter : this.ngRedux.getState().filterOption;
    if (this.employeeList) {
      switch (this.selectedFilter) {
        case EmployeeFilterOptions.AllEmployees:
          this.filterEmployeeList = this.employeeList;
          break;
        case EmployeeFilterOptions.Permanant:
          this.filterEmployeeList = this.employeeList.filter(emp => emp.isPermanent);
          break;
        case EmployeeFilterOptions.TEMPORARY:
          this.filterEmployeeList = this.employeeList.filter(emp => !emp.isPermanent);
          break;
      }
    }
  }

}
