import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../../dashboard/dashboard/dashboard.component';
import { LoginModule } from 'src/app/login/login.module';
import { DashboardModule, dashboardRoutes } from 'src/app/dashboard/dashboard.module';
import { LoginComponent } from 'src/app/login/login/login.component';
import { PrecautionsComponent } from 'src/app/precautions/precautions/precautions.component';
import { LatestNewsComponent } from 'src/app/latest-news/latest-news/latest-news.component';
import { latestNewsRoutes } from 'src/app/latest-news/latest-news.module';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch : 'full'},
  { path: 'dashboard', component: DashboardComponent,children: [...dashboardRoutes] },
  { path: 'latestnews', children:[...latestNewsRoutes] },
  { path: 'login', component:LoginComponent },
  { path: 'precautions', component:PrecautionsComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    LoginModule,
    DashboardModule
  ],
  exports: [
    RouterModule,
    LoginModule,
    DashboardModule
  ]
})
export class AppRoutingModule { }
