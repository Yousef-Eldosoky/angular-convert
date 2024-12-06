import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductCartComponent } from '../../cart/product-cart/product-cart.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule, ProductCartComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  
}
