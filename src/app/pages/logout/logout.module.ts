import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LogoutComponent} from './logout.component';
import { Routes,RouterModule } from '@angular/router';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [{ path: '', component: LogoutComponent },

];
@NgModule({
  declarations: [LogoutComponent],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class LogoutModule { }
