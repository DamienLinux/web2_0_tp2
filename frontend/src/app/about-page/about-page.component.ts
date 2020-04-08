import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { ProduitModule } from './produit/produit.module';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  constructor(private products : ProductsService) { }

  ngOnInit(): void {
    this.products.updateProduits();
  }

  getProduits() : ProduitModule[] {
    return this.products.getProduits();
  }
}
