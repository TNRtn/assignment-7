import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OnlineshopingService } from '../services/onlineshoping.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  imports: [FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  newProduct: any = {};

  constructor(
    private ons: OnlineshopingService,
    private router: Router
  ) {}

  addProduct() {
    this.ons.addProduct(this.newProduct);
    this.router.navigate(['/products']);
  }
}
