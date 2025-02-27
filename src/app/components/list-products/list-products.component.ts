import { Component } from '@angular/core';
import { Product } from '../../interface/product';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-list-products',
  imports: [RouterLink],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.scss',
})
export class ListProductsComponent {
  listProducts: any;
  constructor(private _productService: ProductService) {}
  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this._productService.getListProducts().subscribe((data) => {
      this.listProducts = data;
      console.log(this.listProducts);
    });
  }
}
