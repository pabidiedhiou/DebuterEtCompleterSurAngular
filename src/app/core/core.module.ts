import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnteteComponent } from './components/entete/entete.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    EnteteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
  ],
  exports:[
    EnteteComponent
  ]
})
export class CoreModule { }
