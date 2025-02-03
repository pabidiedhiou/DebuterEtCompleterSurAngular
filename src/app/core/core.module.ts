import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnteteComponent } from './components/entete/entete.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    EnteteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports:[
    EnteteComponent
  ]
})
export class CoreModule { }
