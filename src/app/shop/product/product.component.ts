import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() Id?: number;
  @Input() name?: string;
  @Input() sale: boolean = false;
  @Input() stars: number = 0;
  @Input() price?: number;
  @Input() priceBeforeSale: number = this.price ?? 0;
}
