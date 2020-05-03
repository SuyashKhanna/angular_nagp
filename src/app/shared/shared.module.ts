import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavBarItemComponent } from './nav-bar-item/nav-bar-item.component';
import { FooterComponent } from './footer/footer.component';
import { MatToolbarModule } from  '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations:[
    HeaderComponent,
    NavBarComponent,
    NavBarItemComponent, 
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterModule,
    MatSortModule,
    MatTableModule,
    MatListModule
  ],
  exports : [
    HeaderComponent,
    NavBarComponent,
    FooterComponent,
    MatToolbarModule,
    MatSortModule,
    MatTableModule,
    MatListModule
  ]
})
export class SharedModule { }
