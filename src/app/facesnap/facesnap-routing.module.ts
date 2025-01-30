import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinglefacesnapComponent } from './components/singlefacesnap/singlefacesnap.component';
import { NouveaufacesnapComponent } from './components/nouveaufacesnap/nouveaufacesnap.component';
import { FacesnaplistComponent } from './components/facesnaplist/facesnaplist.component';
const routes: Routes = [
  {
    path:'create', component: NouveaufacesnapComponent
   },
 {
  path:':id', component: SinglefacesnapComponent
 },
 {path: '', component: FacesnaplistComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacesnapRoutingModule { }
