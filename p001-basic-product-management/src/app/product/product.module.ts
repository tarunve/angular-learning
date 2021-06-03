import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductDetailGuard } from './product-detail.guard';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

/**
 *  - Feature Module - Product
 *  - This module will be imported in the App module.
 *  - Commented elements are declared in shared module - shared so sholdn't be here.
 */

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe
    // StarComponent
  ],
  imports: [
    // CommonModule,
    // FormsModule,
    RouterModule.forChild([
      {path:'products', component: ProductListComponent},
      {
        path:'products/:id', 
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent
      }
    ]),
    SharedModule
  ]
})
export class ProductModule { }
