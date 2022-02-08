import { Component, OnInit } from '@angular/core';
import { Produit } from '../Model/produit.Model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',

})
export class ProduitsComponent implements OnInit {

  produits: Produit[];

  constructor(private produitService: ProduitService) {

    this.produits = produitService.listeProduit();

  }

  supprimerProduit(p: Produit) {
    //console.log(p);
    let conf = confirm("Etes-vous sûr ?");
     if (conf)
     this.produitService.supprimerProduit(p);
    
  }


  ngOnInit(): void {
  }

}
