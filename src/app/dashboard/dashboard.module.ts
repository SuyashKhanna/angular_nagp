import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StateListComponent } from './state-list/state-list.component';
import { DistrictListComponent } from './district-list/district-list.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DashboardComponent,
    StateListComponent,
    DistrictListComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
