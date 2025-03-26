import { Routes } from '@angular/router';
import { Q1Component } from './q1/q1.component';
import { Q2Component } from './q2/q2.component';
import { Q3Component } from './q3/q3.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { Q56Component } from './q56/q56.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';

export const routes: Routes = [
    {
        path:'q1',
        component:Q1Component
    },
    {
        path:'q2',
        component:Q2Component
    },
    {
        path:'q3',
        component:Q3Component
    },
   { 
        path: 'products', 
        component: ProductListComponent 
    },
   { 
    path: 'products/add', 
    component: AddProductComponent 
  },
  { 
    path: 'products/:id', 
    component: ProductDetailComponent 
},
{
    path:'q56',
    component:Q56Component
},
{ 
    path: 'q4', 
    component: PeopleListComponent 
},
  { 
    path: 'details/:id', 
    
    component: PersonDetailComponent }


];
