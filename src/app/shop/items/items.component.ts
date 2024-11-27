import { Component } from '@angular/core';
import { ProductComponent } from "../product/product.component";

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent {
  products: Product[] = [
    new Product("Fancy Product", false, 80, 0, 0),
    new Product("Special Item", true, 18, 20, 3),
    new Product("Sale Item", true, 25, 50, 0),
    new Product("Popular Item", false, 40, 0, 4),
    new Product("Sale Item", true, 25, 50, 0),
    new Product("Fancy Product", false, 25, 50, 5),
    new Product("Special Item", true, 18, 20, 3),
    new Product("Popular Item", false, 40, 0, 4),
  ];
}

class Product {
  name: string;
  stars: number;
  sale: boolean;
  price: number;
  priceBeforeSale: number;

  public constructor(name: string, sale: boolean, price: number, priceBeforeSale?: number, stars?: number) {
    this.name = name;;
    this.stars = stars ?? 0;
    this.sale = sale;
    this.price = price;
    this.priceBeforeSale = priceBeforeSale ?? price;
  }
}
