import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemActionsComponent } from './item-actions/item-actions.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemMainViewComponent } from './item-main-view/item-main-view.component';
import { MaterialModule } from '../material/material.module';
import { UtilsModule } from '../utils/utils.module';

@NgModule({
  declarations: [
    ItemDetailComponent, 
    ItemActionsComponent, 
    ItemListComponent, 
    ItemMainViewComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    UtilsModule
  ],
  exports: [
    ItemMainViewComponent,
  ]
})
export class ItemsModule { }