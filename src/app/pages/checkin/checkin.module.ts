import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CheckinComponent} from './checkin.component';
import { Routes,RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

const routes: Routes = [{ path: '', component: CheckinComponent},

];
@NgModule({
  declarations: [CheckinComponent],
  imports: [
    CommonModule,NgxDatatableModule,
    RouterModule.forChild(routes)
  ]
})
export class CheckintModule { }
