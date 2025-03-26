import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { OnlineshopingService } from '../services/onlineshoping.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  providers: [OnlineshopingService],  
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  private ons = inject(OnlineshopingService); 
  products = this.ons.getProducts();

  constructor(private router: Router) {}

  viewDetails(productId: number) {
    this.router.navigate(['/products', productId]);
  }
}
