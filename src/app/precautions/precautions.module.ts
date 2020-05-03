import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrecautionsComponent } from './precautions/precautions.component';
import { PrecautionsRoutingModule } from './precautions-routing.module';



@NgModule({
  declarations: [PrecautionsComponent],
  imports: [
    CommonModule,
    PrecautionsRoutingModule
  ]
})
export class PrecautionsModule { }
