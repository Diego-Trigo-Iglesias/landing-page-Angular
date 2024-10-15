import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.module';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private httpClient = inject(HttpClient);
  private baseURL = 'https://fakestoreapi.com/products'

  public getAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseURL)
  }

  public getProductById(id: number | string): Observable<Product> {
    return this.httpClient.get<Product>(`${this.baseURL}/${id}`);
  }
}
