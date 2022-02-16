import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from '../Model/produit.Model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',

})
export class ProduitsComponent implements OnInit {

  produits: Produit[];

  constructor(private produitService: ProduitService,private route : Router, public authService :AuthService) {

    //this.produits = produitService.listeProduit();

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


  ngOnInit(): void {
    this.produitService.listeProduit().subscribe(prods=>{
      console.log(prods);
      this.produits = prods
      
    });
  }

}
