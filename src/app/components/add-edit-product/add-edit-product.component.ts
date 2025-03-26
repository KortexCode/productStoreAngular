import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Product } from '../../interface/product';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { Alert } from '../../utils/alerts/alertas';
import { DateHour } from '../../utils/date-hour/date-hour';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrl: './add-edit-product.component.scss',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink,  NavbarComponent],
})
export class AddEditProductComponent {
  formAddControl: FormGroup;
  constructor(private formBuilder: FormBuilder, private _productsService: ProductService) {
    this.formAddControl = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      stock: ['', Validators.required],
    });
  }
  addProduct() {
    if(this.formAddControl.valid){
      const { name, description, price, stock } = this.formAddControl.value;
      const product: Product = {
        product_name: name,
        product_description: description,
        price: price,
        stock: stock,
        dateCreated: DateHour.fechaOrdenBarra()
      };
      this._productsService.postCreateProduct(product).subscribe((data:any)=> {
        if(data.status === 'true'){
          Alert.succesAlert(data.message);
        }
        if(data.status == 'false'){
          Alert.errorAlert(data.message)
        }
      }, (error)=> {
        Alert.systemErrorAlert();
      })
    }else {
      Alert.emtyFieldsAlert()
    }
  }
}
