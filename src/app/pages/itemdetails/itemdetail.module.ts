import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ItemdetailsComponent} from './itemdetails.component';
import { Routes,RouterModule } from '@angular/router';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgxImageZoomModule } from 'ngx-image-zoom';


import {MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,MatGridListModule,
    MatDividerModule, 
    MatListModule,MatFormFieldModule,MatInputModule  } from '@angular/material';



const routes: Routes = [{ path: '', component: ItemdetailsComponent },

];
@NgModule({
  declarations: [ItemdetailsComponent],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,NgxImageZoomModule.forRoot(),
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,MatGridListModule,
    MatDividerModule, 
    MatListModule,MatFormFieldModule,MatInputModule,


    RouterModule.forChild(routes)
  ]
})
export class ItemdetailsModule { }
