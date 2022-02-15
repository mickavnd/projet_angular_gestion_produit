import { Injectable } from '@angular/core';
import { Categorie } from '../Model/categorie.Model';
import { Produit } from '../Model/produit.Model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOption ={
  headers : new HttpHeaders({'Content-Type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  apiUrl :string ='http://localhost:8080/produits/api'
   produits : Produit[]; // un tableau de  produit
  categories : Categorie[];
  produitRechercher : Produit[];
  
  produit = new Produit() ;
  categorie  = new Categorie();
  

  

  constructor(private http : HttpClient) { 

    // this.categories =[
    //   {idCat :1 , nomCat : "Pc"},
    //   {idCat :2 ,nomCat : "imprimante"}
    // ];



    // this.produits =[
    //   {idProduit:1, nomProduit:"pc Asus",prixProduit: 3000.600, dateCreation : new Date("01/14/2011"), categorie :{idCat :1, nomCat :"Pc"}},

    //   {idProduit:2, nomProduit:"imprimante",prixProduit: 450,dateCreation : new Date("12/17/2020"), categorie :{idCat :2 ,nomCat :"imprimante"}}, 

    //   {idProduit:3, nomProduit:"tablette Samsung",prixProduit: 900.123, dateCreation : new Date("02/20/2022"), categorie :{idCat :1, nomCat :"Pc"}},
    // ];
    

  }

  listeProduit (): Observable<Produit[]>{

    return this.http.get<Produit[]>(this.apiUrl);
  }

  addProduit(produit: Produit):Observable<Produit>{

  return this.http.post<Produit>(this.apiUrl,produit,httpOption)

  }
  supprimerProduit( id :number){
   const url =`${this.apiUrl}/${id}`;
   return this.http.delete(url,httpOption);
    }

    consulterProduit(id:number): Observable<Produit> {
     const url = `${this.apiUrl}/${id}`;
     return this.http.get<Produit>(url);
      }

    

      updateProduit(prod:Produit): Observable<Produit>{

        return this.http.put<Produit>(this.apiUrl,prod,httpOption);

        
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
