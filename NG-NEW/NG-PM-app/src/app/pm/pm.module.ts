import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import {ReactiveFormsModule} from '@angular/forms'

import { RouterModule, Routes } from '@angular/router';
import { PMHomeComponent } from './pmhome/pmhome.component';
import { PMGridComponent } from './pmgrid/pmgrid.component';
import { ProductService } from './product.service';
import { ProductsResolverService } from './products-resolver.service';
import { PMProductViewComponent } from './pmproduct-view/pmproduct-view.component';
import { PMGridHomeComponent } from './pmgrid-home/pmgrid-home.component';
import { PMProductFormComponent } from './pmproduct-form/pmproduct-form.component';

let routes: Routes = [
  { path: '', component: PMHomeComponent },
  { path: 'pm-new', component: PMProductFormComponent },
  { path: 'pm-edit/:prodId', component: PMProductFormComponent },
  {
    path: 'products',
    component: PMGridHomeComponent,
    children: [
      {
        path: '',
        component: PMGridComponent,
        resolve: {
          products: ProductsResolverService
        },
        outlet: 'grid'
      },
      {
        path: ':prodId',
        component: PMProductViewComponent,
        outlet: 'view'
      }
    ]
  },


];


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [PMHomeComponent, PMGridComponent, PMProductViewComponent, PMGridHomeComponent, PMProductFormComponent],
  providers: [ProductService, ProductsResolverService]
})
export class PmModule { }
