import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewfacesnapComponent } from './components/newfacesnap/newfacesnap.component';
import { SinglefacenapComponent } from './components/singlefacenap/singlefacenap.component';
import { FacesnaplistComponent } from './components/facesnaplist/facesnaplist.component';
import { AuthGuard } from '../core/guards/auth.guard';
const route: Routes = [
  {
    path: 'create',
    component: NewfacesnapComponent,
    canActivate: [AuthGuard],
  },
  {
    path: ':id',
    component: SinglefacenapComponent,
  },
  {
    path: '',
    component: FacesnaplistComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class FaceSnapRoutingModule {}
