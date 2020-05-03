import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/login/login/login.component';
import { PrecautionsComponent } from 'src/app/precautions/precautions/precautions.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadChildren: () => import('../../dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: 'latestnews',
    loadChildren: () => import('../../latest-news/latest-news.module').then(m => m.LatestNewsModule),
  },
  {
    path: 'login', component: LoginComponent,
    loadChildren: () => import('../../login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'precautions', component: PrecautionsComponent,
    loadChildren: () => import('../../precautions/precautions.module').then(m => m.PrecautionsModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
