import { Categorie } from "./categorie.Model";

export class Produit {
    idProduit : number;
    nomProduit : string;
    prixProduit : number;
    dateCreation : Date;
    categorie : Categorie
}