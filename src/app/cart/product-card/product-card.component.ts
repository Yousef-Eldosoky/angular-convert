import { Component, Input } from '@angular/core';
import { IProduct } from '../../interface/i-product';
import { SliceTextPipe } from "../../pip/slice-text.pipe";
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [SliceTextPipe, CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product?: IProduct;

  
}
