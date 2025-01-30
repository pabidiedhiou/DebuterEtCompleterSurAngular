import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './components/accueil/accueil.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    AccueilComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ]
})
export class AccueilModule { }
