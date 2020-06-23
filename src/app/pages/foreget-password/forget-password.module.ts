import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ForegetPasswordComponent} from './foreget-password.component';
import { Routes,RouterModule } from '@angular/router';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [{ path: '', component: ForegetPasswordComponent },

];
@NgModule({
  declarations: [ForegetPasswordComponent],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ForgetPasswordModule { }
