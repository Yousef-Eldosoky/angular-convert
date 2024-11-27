import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { ItemsComponent } from "../shop/items/items.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ItemsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
