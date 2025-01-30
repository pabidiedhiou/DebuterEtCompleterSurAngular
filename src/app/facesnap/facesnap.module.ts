import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacesnapRoutingModule } from './facesnap-routing.module';
import { FacesnapComponent } from './components/facesnap/facesnap.component';
import { FacesnaplistComponent } from './components/facesnaplist/facesnaplist.component';
import { NouveaufacesnapComponent } from './components/nouveaufacesnap/nouveaufacesnap.component';
import { SinglefacesnapComponent } from './components/singlefacesnap/singlefacesnap.component';

@NgModule({
  declarations: [
    FacesnapComponent,
    FacesnaplistComponent,
    NouveaufacesnapComponent,
    SinglefacesnapComponent
  ],
  imports: [
    CommonModule,
    FacesnapRoutingModule
  ]
})
export class FacesnapModule { }
