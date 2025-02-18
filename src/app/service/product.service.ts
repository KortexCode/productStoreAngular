import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private myApiUrl: string = environment.endpoint;

  constructor(private http: HttpClient) {}

  getListProducts() {
    return this.http.get(`${this.myApiUrl}/products`);
  }
}
