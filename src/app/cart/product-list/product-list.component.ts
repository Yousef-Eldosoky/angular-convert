import { Component } from '@angular/core';
import { ShopService } from '../../shop.service';
import { IProduct } from '../../interface/i-product';
import { ProductCardComponent } from "../product-card/product-card.component";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  cart: IProduct[];
  constructor(private shopService: ShopService) {
    this.cart = this.shopService.getCart();
  }
}
