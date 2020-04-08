import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProduitModule } from './produit/produit.module';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  private produits : ProduitModule[];

  updateProduits() : void {
    this.httpClient.get<ProduitModule[]>('http://localhost:8090/produits').subscribe(datas => {
      this.produits = datas;
    });
  }

  getProduits() : ProduitModule[] {
    console.log(this.produits);
    return this.produits;
  }
}
