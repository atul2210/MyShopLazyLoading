import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PrivacyPolicyComponent} from './privacy-policy.component';
import { Routes,RouterModule } from '@angular/router';
////import {FormsModule,ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [{ path: '', component: PrivacyPolicyComponent },

];
@NgModule({
  declarations: [PrivacyPolicyComponent],
  imports: [
    CommonModule,//FormsModule,ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class PrivacyPolicyModule { }
