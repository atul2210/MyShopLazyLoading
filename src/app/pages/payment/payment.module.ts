import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PaymentComponent} from './payment.component';
import { Routes,RouterModule } from '@angular/router';
//import {FormsModule,ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [{ path: '', component: PaymentComponent },

];
@NgModule({
  declarations: [PaymentComponent],
  imports: [
    CommonModule,//,FormsModule,ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class PaymentModule { }
