import { Component, Input } from '@angular/core';
import { SliceTextPipe } from "../../pip/slice-text.pipe";
import { CurrencyPipe } from '@angular/common';
import { ICartProduct } from '../../interface/i-cart-product';
import { ShopService } from '../../shop.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [SliceTextPipe, CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() cartProduct?: ICartProduct;

  constructor(private shopService: ShopService) {}

  removeFromCart(id?: number) {
    if(id) {
      this.shopService.removeFromCart(id);
    }
  }
}
