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

    this.categorie = this.produitService.listeCategorie();

    this.currentProduit =this.produitService.consulterProduit(this.activatedRoute.snapshot.params['id']);

    console.log(this.currentProduit);
    
  }



  updateProduit(){

    this.updateCategorie =this.produitService.consulterCategorie(this.currentProduit.categorie.idCat);
    this.currentProduit.categorie= this.updateCategorie;
    this.produitService.updateProduit(this.currentProduit);
    this.router.navigate(['produits']);
    
    
  }

}
