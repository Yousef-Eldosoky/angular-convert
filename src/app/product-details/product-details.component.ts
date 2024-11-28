import { Component } from '@angular/core';
import { ItemsComponent, Product } from '../shop/items/items.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  product: Product;
  productId: number;
  private item: ItemsComponent = new ItemsComponent();

  constructor(private activatedRoute: ActivatedRoute, private router:Router) {
    this.productId = +(this.activatedRoute.snapshot.paramMap.get('Id') ?? 0);
    this.product = this.item.products[this.productId-1];
    if (this.product == null) {
      this.router.navigate(['/notFound']);
    }
  }

}
