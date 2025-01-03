import { Component } from '@angular/core';
import { ShopService } from '../../shop.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-cart',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.css'
})
export class ProductCartComponent {
  constructor(private shopService: ShopService) {}
  ngOnInit() {
    this.shopService.cartSubject.subscribe(() => {
      this.count = this.shopService.cartCount();
    });
  }

  count: number = 0;
}
