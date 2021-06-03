import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { ProductModule } from './product/product.module';

/**
 *  Below commented elements are declared in feature module - product.
 *  So, should not be redeclared here.
 */

@NgModule({
  declarations: [
    AppComponent
    // ProductListComponent
    // ConvertToSpacesPipe,
    // StarComponent,
    // ProductDetailComponent,
    // WelcomeComponent
  ],
  imports: [
    BrowserModule,
    //FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      // {path:'products', component: ProductListComponent},
      // {
      //   path:'products/:id', 
      //   canActivate: [ProductDetailGuard],
      //   component: ProductDetailComponent
      // },
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo:'welcome', pathMatch: 'full'},
      {path: '**' , redirectTo: 'welcome', pathMatch: 'full'}
    ]),
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
