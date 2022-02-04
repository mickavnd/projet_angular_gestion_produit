import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';

import {ProduitsComponent} from './produits/produits.component';

 const routes : Routes =[
   {path: "produits", component: ProduitsComponent}
 ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
