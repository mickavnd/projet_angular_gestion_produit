import { Component, OnInit } from '@angular/core';
import { Categorie } from '../Model/categorie.Model';
import { Produit } from '../Model/produit.Model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {
 
  newProduit =new Produit()
  msg : string ;
  categorie : Categorie[];
  newIdCat :number;
  newCategorie : Categorie;

  constructor( private produitService : ProduitService) { }


 addProduit(){   
   this.newCategorie = this.produitService.consulterCategorie(this.newIdCat);
    this.newProduit.categorie =this.newCategorie;
    this.produitService.addProduit(this.newProduit);
    this.msg ="Produit "+ this.newProduit.nomProduit+" ajouté avec succès"
  }
  ngOnInit(): void {
    this.categorie = this.produitService.listeCategorie();
  }

 

}
