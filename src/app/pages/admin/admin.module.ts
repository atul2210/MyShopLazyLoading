import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { AdminComponent } from '../../pages/admin/admin.component';
import { AddItemComponent } from './add-item/add-item.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { AdminDirective } from './admin.directive';
import {MatFormFieldModule } from '@angular/material';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {adminapiservice} from './admin-api-service';
import { MatInputModule } from '@angular/material/input';
const routes: Routes = [
    { path: '', component: AdminComponent, children:[
        { path: 'AddItem', component: AddItemComponent,data: { linkIndex: 0 }},
        { path: 'EditItem', component: EditItemComponent,data: { linkIndex: 1, } },
        { path: 'AdminMenu', component: AdminMenuComponent,data: { linkIndex: 2 }},
    ]
},
];
@NgModule({
  declarations: [AdminComponent, AddItemComponent, EditItemComponent, AdminMenuComponent, AdminDirective],
  imports: [
    CommonModule,MatFormFieldModule ,FormsModule,ReactiveFormsModule,MatInputModule,
    RouterModule.forChild(routes)
  ],
  entryComponents:[AddItemComponent, EditItemComponent],
  providers: [adminapiservice]
})
export class Adminmodule { }