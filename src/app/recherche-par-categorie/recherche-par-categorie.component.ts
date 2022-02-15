import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from '../Model/categorie.Model';
import { Produit } from '../Model/produit.Model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-recherche-par-categorie',
  templateUrl: './recherche-par-categorie.component.html',
  styles: [
  ]
})
export class RechercheParCategorieComponent implements OnInit {

  produit : Produit[];
  categorie : Categorie[];
  idCategorie :number;


  constructor(private produitService:ProduitService, private route: Router) { 
    
  }

  ngOnInit(): void {

   // this.categorie =this.produitService.listeCategorie();
 //   this.produit = this.produitService.listeProduit();
  }

onchange(){
 // console.log(this.idCategorie);//test

 this.produit =this.produitService.rechercheParCategorie(this.idCategorie)
  

}

  supprimerProduit(p: Produit) {
    //console.log(p);
    let conf = confirm("Etes-vous sûr ?");
     if (conf)
     this.produitService.supprimerProduit(p.idProduit).subscribe(()=>{
       console.log("produit suprimé");
       
     });
     this.route.navigate(['produits']).then(()=>{
       window.location.reload();
     });
    
  }



}
