import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinglefacesnapComponent } from './components/singlefacesnap/singlefacesnap.component';
import { NouveaufacesnapComponent } from './components/nouveaufacesnap/nouveaufacesnap.component';
import { FacesnapComponent } from './components/facesnap/facesnap.component';
import { authGuard } from '../core/guards/auth.guard';
import { facesnapResolver } from './resolvers/facesnap.resolver';
const routes: Routes = [
  {
    path:'create', component: NouveaufacesnapComponent, canActivate : [authGuard]
   },
 {
  path:':id', component: SinglefacesnapComponent, canActivate : [authGuard]
 },
 {path: '', component: FacesnapComponent, canActivate : [authGuard], resolve : {facesnaps : facesnapResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacesnapRoutingModule { }
