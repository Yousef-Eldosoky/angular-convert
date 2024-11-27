import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() name?: string;
  @Input() sale: boolean = false;
  @Input() stars: number = 0;
  @Input() price?: number;
  @Input() priceBeforeSale: number = this.price ?? 0;
}
