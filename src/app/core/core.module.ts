import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnteteComponent } from './components/entete/entete.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    EnteteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    EnteteComponent
  ]
})
export class CoreModule { }
