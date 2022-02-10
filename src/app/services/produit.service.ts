import { Injectable } from '@angular/core';
import { Categorie } from '../Model/categorie.Model';
 import { Produit } from '../Model/produit.Model';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  
  produits : Produit[]; // un tableau de  produit
  categories : Categorie[];
  produitRechercher : Produit[];
  
  produit = new Produit() ;
  categorie  = new Categorie();
  

  

  constructor() { 

    this.categories =[
      {idCat :1 , nomCat : "Pc"},
      {idCat :2 ,nomCat : "imprimante"}
    ];



    this.produits =[
      {idProduit:1, nomProduit:"pc Asus",prixProduit: 3000.600, dateCreation : new Date("01/14/2011"), categorie :{idCat :1, nomCat :"Pc"}},

      {idProduit:2, nomProduit:"imprimante",prixProduit: 450,dateCreation : new Date("12/17/2020"), categorie :{idCat :2 ,nomCat :"imprimante"}}, 

      {idProduit:3, nomProduit:"tablette Samsung",prixProduit: 900.123, dateCreation : new Date("02/20/2022"), categorie :{idCat :1, nomCat :"Pc"}},
    ];
    

  }

  listeProduit (): Produit[]{

    return this.produits;
  }

  addProduit(produit: Produit){

    this.produits.push(produit);

  }
  supprimerProduit( prod: Produit){
    //supprimer le produit prod du tableau produits
    const index = this.produits.indexOf(prod, 0);
    if (index > -1) {
    this.produits.splice(index, 1);
    }
    //ou Bien
    /* this.produits.forEach((cur, index) => {
    if(prod.idProduit === cur.idProduit) {
    this.produits.splice(index, 1);
    }
    }); */
    }

    consulterProduit(id:number): Produit {
      this.produit = this.produits.find(p => p.idProduit == id);
      return this.produit;
      }

    trierProduit(){
      this.produits = this.produits.sort((n1,n2)=>{
       
        if(n1.idProduit > n2.idProduit){
          return 1;
        }

        if(n1.idProduit < n2.idProduit){
          return -1 ;
        }

        return 0 ;

      })
    }

      updateProduit(p:Produit){

        this.supprimerProduit(p);
        this.addProduit(p);
        this.trierProduit();
      }

      listeCategorie(): Categorie[]{

        return this.categories

      }

      consulterCategorie( id : number): Categorie{

        this.categorie = this.categories.find(cat => cat.idCat == id); 
        
        return this.categorie
      }

      rechercheParCategorie(idCat:number): Produit[]{

        this.produitRechercher =[];
        this.produits.forEach((cur,index)=>{
          if(idCat == cur.categorie.idCat){
            console.log("cur"+cur);  
            this.produitRechercher.push(cur)
          }});
          return this.produitRechercher;


      }





}
