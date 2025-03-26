import { Component, OnInit } from '@angular/core';
import { OnlineshopingService } from '../services/onlineshoping.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{
  product: any;

  constructor(
    private ons: OnlineshopingService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.ons.getProductById(productId);
  }

  goBack() {
    this.router.navigate(['/products']);
  }
}
