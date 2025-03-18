import { Routes } from '@angular/router';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { AddEditProductComponent } from './components/add-edit-product/add-edit-product.component';
import {LoginComponent} from './components/login/login.component';

export const routes: Routes = [
  {path: '', redirectTo:"login", pathMatch:"full"},//RUTA PRINCIPAL
  {path: 'login', component: LoginComponent},//Ruta de lista de productos
  {path: 'products', component: ListProductsComponent},//Ruta de lista de productos
  {path: 'products/add', component: AddEditProductComponent},
  {path: 'products/edit/:id', component: AddEditProductComponent},
  { path: '**',   redirectTo: 'login', pathMatch: 'full' },//RUTA COMODÍN
];
