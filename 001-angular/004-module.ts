/**
 *  -   For any component to be used in the another component, we need to make it 
 *      visible to other components. That is done via Ng Module.
 *  -   Sample Main app Module:
 *              import { NgModule } from '@angular/core';
 *              import { BrowserModule } from '@angular/platform-browser';
 *              import { AppComponent } from './app.component';
 *              import { ProductListComponent } from './product/product-list.component';
 *              
 *              @NgModule({
 *                  declarations: [
 *                      AppComponent,
 *                      ProductListComponent
 *                  ],
 *                  imports: [
 *                      BrowserModule
 *                  ],
 *                  providers: [],
 *                  bootstrap: [AppComponent]       //  define the main module to be loaded
 *              })
 *              export class AppModule { }
 *      -   imports : importing external modules
 *      -   declarations : declaring the components so that it can be used by 
 *              other components.
 *      -   providers : list of services provided by module.
 * 
 *  -   Here we have declared ProductListComponent , AppComponent which can be used 
 *      in other components.
 *  -   We are importing BrowserModule as well which is required to interact with Browser.
 */