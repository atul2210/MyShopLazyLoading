import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AboutUsComponent} from '../pages/about-us.component';
import { Routes,RouterModule } from '@angular/router';

//import { PmtRcvtThanksComponent } from './pmt-rcvt-thanks/pmt-rcvt-thanks.component';


const routes: Routes = [{ path: '', component: AboutUsComponent },

];
@NgModule({
  declarations: [AboutUsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AboutUsModule { }
