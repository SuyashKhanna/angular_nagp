import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StateListComponent } from './state-list/state-list.component';
import { StateListItemComponent } from './state-list-item/state-list-item.component';
import { DistrictListComponent } from './district-list/district-list.component';
import { DistrictListItemComponent } from './district-list-item/district-list-item.component';
import { Routes, RouterModule } from '@angular/router';

export const dashboardRoutes: Routes = [
  {path:'', component: StateListComponent},
  {path:'statelist', component: StateListComponent},
  {path:'districtlist', component: DistrictListComponent}
];

@NgModule({
  declarations: [
    DashboardComponent,
    StateListComponent,
    StateListItemComponent,
    DistrictListComponent, 
    DistrictListItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
