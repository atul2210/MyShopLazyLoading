import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PmtRcvtThanksComponent } from './pmt-rcvt-thanks.component';
import {FormsModule,ReactiveFormsModule,} from '@angular/forms';

const routes: Routes = [
  { path: '', component: PmtRcvtThanksComponent }
];

@NgModule({
  declarations: [PmtRcvtThanksComponent],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class PmtRcvtThanksModule { }