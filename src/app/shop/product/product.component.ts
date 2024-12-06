import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IProduct } from '../../interface/i-product';
import { ShopService } from '../../shop.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() product?: IProduct;

  round(num: number) : number {
    return Math.round(num);
  }

  constructor(private shopService: ShopService) {}

  addToCart(product?: IProduct) {
    if(product) {
      this.shopService.addToCart(product);
    }
  }
}
