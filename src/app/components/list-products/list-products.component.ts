import { Component } from '@angular/core';
import { Product } from '../../interface/product';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-products',
  imports: [RouterLink],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.scss'
})
export class ListProductsComponent {
  listProducts: Product[] = [
    {
      id:1,
      name: 'Warcraft 3 reforged',
      description: 'Juego de estrategia en tiempo real',
      price: 250,
      stock: 20,
    },
    {
      id:2,
      name: 'World of warcraft Classic',
      description: 'Juego de rol en tiempo real',
      price: 500,
      stock: 10,
    }
  ]
}
