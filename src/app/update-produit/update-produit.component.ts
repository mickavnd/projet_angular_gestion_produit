import { Component, OnInit } from '@angular/core';
import { Produit } from '../Model/produit.Model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../services/produit.service'
import { Categorie } from '../Model/categorie.Model';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styles: [
  ]
})
export class UpdateProduitComponent implements OnInit {

  currentProduit = new Produit();
  categorie : Categorie[];
  updateCategorie : Categorie;





  constructor(private activatedRoute: ActivatedRoute,
              private produitService: ProduitService,
              private router : Router) { }

  ngOnInit(): void {

    this.produitService.consulterProduit(this.activatedRoute.snapshot.params['id']).subscribe(prod => {this.currentProduit = prod ;})
    
  }



  updateProduit(){

    this.produitService.updateProduit(this.currentProduit).subscribe(prod =>{
    this.router.navigate(["produits"]);
    },(error)=>{alert("probleme lors de la modification")}
    
    
    );
    

    
    
    
  }

}
