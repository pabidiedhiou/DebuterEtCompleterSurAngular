import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacesnapsComponent } from './components/facesnaps/facesnaps.component';
import { FacesnaplistComponent } from './components/facesnaplist/facesnaplist.component';
import { NewfacesnapComponent } from './components/newfacesnap/newfacesnap.component';
import { SinglefacenapComponent } from './components/singlefacenap/singlefacenap.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FaceSnapRoutingModule } from './facesnap-routing.module';
import { Listfacesnaps2Component } from './components/listfacesnaps2/listfacesnaps2.component';

@NgModule({
  declarations: [
    FacesnapsComponent,
    FacesnaplistComponent,
    NewfacesnapComponent,
    SinglefacenapComponent,
    Listfacesnaps2Component,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FaceSnapRoutingModule,
  ],
  exports: [
    FacesnapsComponent,
    FacesnaplistComponent,
    NewfacesnapComponent,
    SinglefacenapComponent,
  ],
})
export class FacesnapModule {}
