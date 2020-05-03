import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { Routes } from '@angular/router';

export const latestNewsRoutes: Routes = [
  {path:'', component: LatestNewsComponent},
  {path:'add', component: AddNewsComponent}
];

@NgModule({
  declarations: [LatestNewsComponent, AddNewsComponent],
  imports: [
    CommonModule
  ]
})
export class LatestNewsModule { }
