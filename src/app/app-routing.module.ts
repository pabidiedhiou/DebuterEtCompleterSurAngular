import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landing/components/landingpage/landingpage.component';

const routes: Routes = [
  {
    path: 'facesnaps',
    loadChildren: () =>
      import('./facesnap/facesnap.module').then((m) => m.FacesnapModule),
  },

  { path: '', component: LandingpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
