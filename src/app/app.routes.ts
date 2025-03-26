import { Routes } from '@angular/router';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { AddEditProductComponent } from './components/add-edit-product/add-edit-product.component';
import {LoginComponent} from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { guardAuthGuard } from './utils/guard-auth.guard';

export const routes: Routes = [
  {path: '', redirectTo:"login", pathMatch:"full"},//RUTA PRINCIPAL
  {path: 'login', component: LoginComponent},//Ruta de login
  {path: 'sign-in', component: SignInComponent},//Ruta de login
  {path: 'products', component: ListProductsComponent, /* canActivate:[guardAuthGuard] */},//Ruta de lista de productos
  {path: 'products/add', component: AddEditProductComponent, /* canActivate:[guardAuthGuard] */},
  /* {path: 'products', children: [{path: ':add', component: AddEditProductComponent}]}, */
  /* {path: 'products/edit/:id', component: AddEditProductComponent, canActivate:[guardAuthGuard]}, */
  { path: '**',   redirectTo: 'login', pathMatch: 'full' },//RUTA COMODÍN
];
