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
    new Product(1, "Fancy Product", false, 80, 0, 0),
    new Product(2, "Special Item", true, 18, 20, 3),
    new Product(3, "Sale Item", true, 25, 50, 0),
    new Product(4, "Popular Item", false, 40, 0, 4),
    new Product(5, "Sale Item", true, 25, 50, 0),
    new Product(6, "Fancy Product", false, 25, 50, 5),
    new Product(7, "Special Item", true, 18, 20, 3),
    new Product(8, "Popular Item", false, 40, 0, 4),
  ];
}

export class Product {
  Id: number;
  name: string;
  stars: number;
  sale: boolean;
  price: number;
  priceBeforeSale: number;

  public constructor(Id: number, name: string, sale: boolean, price: number, priceBeforeSale?: number, stars?: number) {
    this.Id = Id;
    this.name = name;
    this.stars = stars ?? 0;
    this.sale = sale;
    this.price = price;
    this.priceBeforeSale = priceBeforeSale ?? price;
  }
}
