import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShopService } from '../shop.service';
import { IProduct } from '../interface/i-product';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  product?: IProduct;
  productId: number;

  constructor(private activatedRoute: ActivatedRoute, private router:Router, private shopService: ShopService) {
    this.productId = +(this.activatedRoute.snapshot.paramMap.get('Id') ?? 0);
    this.product = this.shopService.getProduct(this.productId);
    if (this.product == null) {
      this.router.navigate(['/notFound']);
    }
  }

}
