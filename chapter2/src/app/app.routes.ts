import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { count } from 'rxjs';
import { CountComponent } from './count/count.component';
import { HomeComponent } from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'product',component:ProductComponent},
    {path:'count',loadComponent:()=>import('./count/count.component').then(m=>m.CountComponent)},
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'**',component:PageNotFoundComponent}
];

