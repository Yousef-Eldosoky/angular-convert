import { Component, HostListener } from '@angular/core';
import { ShopService } from '../../shop.service';
import { ProductCardComponent } from "../product-card/product-card.component";
import { ICartProduct } from '../../interface/i-cart-product';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent, NgStyle],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  cart: ICartProduct[];
  public screenHeight?: number;
  
  constructor(private shopService: ShopService) {
    this.cart = this.shopService.getCart();
  }

  ngOnInit() {
    this.shopService.cartSubject.subscribe((value) => {
      this.cart = value;
    });
    this.screenHeight = window.innerHeight-176;
  }
    
    
  @HostListener('window:resize', ['$event'])  
  onResize() { 
    this.screenHeight = window.innerHeight-176;
  } 
}
