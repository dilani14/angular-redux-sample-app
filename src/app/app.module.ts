import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgReduxModule, NgRedux } from '@angular-redux/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeComponent } from './components/employee-list/employee/employee.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { IAppState, INITIAL_STATE, appReducer } from './state/app.store';
import { EmployeeFilterComponent } from './components/employee-filter/employee-filter.component';
import { AppActions } from './state/app.actions';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeComponent,
    AddEmployeeComponent,
    EmployeeFilterComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgReduxModule
  ],
  providers: [AppActions],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    // Tell @angular-redux/store about our rootReducer and our initial state.
    // It will use this to create a redux store for us and wire up all the
    // events.
    ngRedux.configureStore(
      appReducer,
      INITIAL_STATE);
  }
}
