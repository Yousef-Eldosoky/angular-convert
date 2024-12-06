import { Component } from '@angular/core';
import { ShopService } from '../../shop.service';
import { ProductCardComponent } from "../product-card/product-card.component";
import { ICartProduct } from '../../interface/i-cart-product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  cart: ICartProduct[];
  constructor(private shopService: ShopService) {
    this.cart = this.shopService.getCart();
  }

  ngOnInit() {
    this.shopService.cartSubject.subscribe((value) => {
      this.cart = value;
    });
  }
}
