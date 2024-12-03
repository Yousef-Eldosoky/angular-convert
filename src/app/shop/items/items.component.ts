import { Component } from '@angular/core';
import { ProductComponent } from "../product/product.component";
import { IProduct } from '../../interface/i-product';
import { ShopService } from '../../shop.service';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent {
  products: IProduct[];
  constructor(shopService: ShopService) {
    this.products = shopService.getAllProducts();
  } 
}

