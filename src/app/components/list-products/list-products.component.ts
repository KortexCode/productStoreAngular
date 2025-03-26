import { Component } from '@angular/core';
import { Product } from '../../interface/product';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../service/product.service';
import { NavbarComponent } from "../navbar/navbar.component";
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-list-products',
  imports: [RouterLink, NavbarComponent, ProgressBarComponent, NgIf],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.scss',
})
export class ListProductsComponent {
  listProducts: any;
  loading:boolean = true;
  constructor(private _productService: ProductService) {}
  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this._productService.getListProducts().subscribe((data) => {
      setTimeout(()=> {
        this.loading = false;
        this.listProducts = data;
      }, 2000)
      console.log(this.listProducts);
    });
  }
}
