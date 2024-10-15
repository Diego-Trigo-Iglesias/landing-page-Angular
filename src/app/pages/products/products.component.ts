import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Product } from '../../models/product.module';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  private apiService = inject(ApiService);
  private router = inject(Router);

  productList: Product[] = [];

  ngOnInit(): void {
    this.apiService.getAllProducts().subscribe((data: Product[]) => {
      this.productList = data;
    })
  }

  goToDetail(productId: number) {
    this.router.navigate(['/products', productId]);
  }

}