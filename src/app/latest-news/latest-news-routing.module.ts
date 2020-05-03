import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { AddNewsComponent } from './add-news/add-news.component';

const routes: Routes = [
  {path:'', component: LatestNewsComponent},
  {path:'add',component:AddNewsComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LatestNewsRoutingModule { }