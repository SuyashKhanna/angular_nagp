import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { Routes, RouterModule } from '@angular/router';
import { LatestNewsRoutingModule } from './latest-news-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


export const latestNewsRoutes: Routes = [
  {path:'', component: LatestNewsComponent},
  {path:'add', component: AddNewsComponent}
];

@NgModule({
  declarations: [LatestNewsComponent, AddNewsComponent],
  imports: [
    CommonModule,
    LatestNewsRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class LatestNewsModule { }
