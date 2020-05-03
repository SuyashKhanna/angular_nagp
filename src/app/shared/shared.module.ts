import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavBarItemComponent } from './nav-bar-item/nav-bar-item.component';



@NgModule({
  declarations: [HeaderComponent, NavBarComponent, NavBarItemComponent],
  imports: [
    CommonModule
  ],
  exports : [
    HeaderComponent,
    NavBarComponent
  ]
})
export class SharedModule { }
