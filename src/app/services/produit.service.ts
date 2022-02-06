import { Injectable } from '@angular/core';
import { Produit } from '../Model/produit.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  
  produits : Produit[]; // un tableau de  produit
  constructor() { 

    this.produits =[
      {idProduit:1, nomProduit:"pc Asus",prixProduit: 3000.600, dateCreation : new Date("01/14/2011")},

      {idProduit:2, nomProduit:"imprimante",prixProduit: 450,dateCreation : new Date("12/17/2020")}, 

      {idProduit:3, nomProduit:"tablette Samsung",prixProduit: 900.123, dateCreation : new Date("02/20/2022")},
    ];
    

  }

  listeProduit (): Produit[]{

    return this.produits;
  }

  addProduit(produit: Produit){

    this.produits.push(produit);

  }



}
