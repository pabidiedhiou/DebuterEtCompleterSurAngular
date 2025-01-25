import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [LandingpageComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [LandingpageComponent],
})
export class LandingModule {}
