import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemMainViewComponent } from './items/item-main-view/item-main-view.component';

const routes: Routes = [
  { path: '', component: ItemMainViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
