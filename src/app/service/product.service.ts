import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private myApiUrl: string = environment.endpoint;

  constructor(private http: HttpClient) {}

  /* getListProducts() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.myApiUrl}/products`, {headers: headers});
  } */
  getListProducts() {
    return this.http.get(`${this.myApiUrl}/products`);
  }
  postCreateProduct(product: any){
    return this.http.post(`${this.myApiUrl}/products/create/product`, product);
  }
}
