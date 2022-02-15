import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  

  constructor( private produitService : ProduitService, private route:Router) { }


 addProduit(){   
 this.produitService.addProduit(this.newProduit).subscribe(prod => {
   console.log(prod);
   
 });
 this.route.navigate(['produit'])
  }
  ngOnInit(): void {
    this.categorie = this.produitService.listeCategorie();
  }

 

}
