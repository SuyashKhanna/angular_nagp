import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StateListComponent } from './state-list/state-list.component';
import { DistrictListComponent } from './district-list/district-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const childRoutes : Routes = [
    {path:'', redirectTo:'statelist',pathMatch:'full'},
    {path:'statelist', component: StateListComponent},
    {path:'districtlist/Total', redirectTo:'districtlist/Assam',pathMatch:'full'},
    {path:'districtlist/:district', component: DistrictListComponent}
]

const routes: Routes = [
  {path:'', component: DashboardComponent, children: [...childRoutes] },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }