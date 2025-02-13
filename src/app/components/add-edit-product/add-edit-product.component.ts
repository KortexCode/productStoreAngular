import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Product } from '../../interface/product';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-add-edit-product',
  imports: [RouterLink, ReactiveFormsModule, NgIf],
  templateUrl: './add-edit-product.component.html',
  styleUrl: './add-edit-product.component.scss',
})
export class AddEditProductComponent {
  formAddControl: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.formAddControl = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      stock: ['', Validators.required]
    });
  }
  addProduct() {
    console.log(this.formAddControl.value);
    const {name, description, price, stock} = this.formAddControl.value;
    const product: Product = {
      name: name,
      description: description,
      price: price,
      stock: stock
    }

    console.log("El producto:", product)
  }
}
