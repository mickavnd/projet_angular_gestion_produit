import { Component, OnInit } from '@angular/core';
import { Produit } from '../Model/produit.Model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {
 
  newProduit =new Produit()

  constructor( private produitService : ProduitService) { }

  ngOnInit(): void {
  }

  addProduit(){
    this.produitService.addProduit(this.newProduit);
  }

}
