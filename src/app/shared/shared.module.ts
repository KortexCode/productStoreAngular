import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { ListProductsComponent } from '../components/list-products/list-products.component';



@NgModule({
  imports: [CommonModule,
    ReactiveFormsModule,
    FormGroup,
    FormBuilder,
    NgIf,
    NavbarComponent, HttpClient, RouterLink],
  exports: [CommonModule,
    ReactiveFormsModule,
    NgIf,
    NavbarComponent, RouterLink]
})
export class SharedModule { }
