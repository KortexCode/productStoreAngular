import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../interface/product';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrl: './add-edit-product.component.scss',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
})
export class AddEditProductComponent {
  formAddControl: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.formAddControl = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      stock: ['', Validators.required],
    });
  }
  addProduct() {
    const { name, description, price, stock } = this.formAddControl.value;
    const product: Product = {
      name: name,
      description: description,
      price: price,
      stock: stock,
    };

    console.log('El producto:', product);
  }
}
