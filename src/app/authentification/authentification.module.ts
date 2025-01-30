import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthentificationRoutingModule } from './authentification-routing.module';
import { LoginComponent } from './components/login/login.component';
import { InscriptionComponent } from './components/inscription/inscription.component';


@NgModule({
  declarations: [
    LoginComponent,
    InscriptionComponent
  ],
  imports: [
    CommonModule,
    AuthentificationRoutingModule
  ]
})
export class AuthentificationModule { }
