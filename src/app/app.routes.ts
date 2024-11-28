import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const routes: Routes = [
    {path: "home", redirectTo: "/", pathMatch: "full"},
    {path: "" , component: HomeComponent},
    {path: "about" , component: AboutComponent},
    {path: "productDetails/:Id", component: ProductDetailsComponent},
    {path: "**", component: NotFoundComponent}
];
