import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
 
})
export class ProduitsComponent implements OnInit {

  produits : string[];

  constructor() {

    this.produits =["Pc asus","Imprimante espon", "tablette samsung"];
    
   }

  ngOnInit(): void {
  }

}
