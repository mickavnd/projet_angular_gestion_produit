import { ForbidenComponent } from './forbiden/forbiden.component';
import { ProduitGuard } from './produit.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';

import {ProduitsComponent} from './produits/produits.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
import { LoginComponent } from './login/login.component';



 const routes : Routes =[
   {path: "produits", component: ProduitsComponent}, 
   {path : "add-produit", component :AddProduitComponent, canActivate:[ProduitGuard]},
   {path: "updateProduit/:id", component: UpdateProduitComponent},
   {path :"rechercheParCategorie", component: RechercheParCategorieComponent},
   {path :"login", component : LoginComponent },
   {path:"forbiden", component: ForbidenComponent},
   {path : "", redirectTo :"produits", pathMatch:"full"}

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
