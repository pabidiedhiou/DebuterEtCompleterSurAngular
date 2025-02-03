import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnteteComponent } from './components/entete/entete.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpInterceptorProviders } from './interceptors';
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
  ],
  providers : [HttpInterceptorProviders]
})
export class CoreModule { }
