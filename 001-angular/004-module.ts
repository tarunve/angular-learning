/**
 *  Angular Module:
 *  ===============
 *  -   A class with an NgModule decorator.
 *  -   Purpose:
 *      -   Organize the pieces of of our application
 *      -   Arrange them into blocks.
 *      -   Extend our application with capabilities from external libraries.
 *      -   Provide  a template resolution environment
 *      -   Aggregate and re-export
 *  -   For any component to be used in the another component, we need to make it 
 *      visible to other components. That is done via Ng Module i.e. it exports.
 *  -   We cann also import external modules to our module.
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
 * 
 *  Shared Module:
 *  -------------
 *  -   Organize commonly used pieces of our application.
 *  -   Export these pieces to share them
 * 
 *  Components in Ng Module:
 *  ------------------------
 *  1.   Bootstrap Array:
 *              bootstrap : [AppComponent]
 *      -   Bootstrap array of the Ng Module defines the component that is starting
 *          point of application.
 *      -   Every application must bootstrap at least one component, the root 
 *          application component.
 *      -   Bootstrap array should only be used in the root application module- AppModule.
 *  2.  Declaration Array:
 *              declarations: [
 *                  ProductListComponent,
 *                  ConvertToSpacesPipe
 *              ]
 *      -   Every component, directive , and pipe we create must belong to one and
 *          only one Angular Module.
 *      -   Only declares components, directives and pipes.
 *      -   They are only accessible to other components, directives and pipes declared
 *          in the same module.
 *      -   The angular module provides the template resolution environment for
 *          its component temlates.
 *  3.  Exports Array:
 *              exports: [
 *                  StarComponent, 
 *                  FormsModule
 *              ]
 *      -   We can export Angular Module, 3rd Party Module, Component, Directive, Pipe.
 *      -   Re-export modules to re-export their components , directive & pipes.
 *      -   We can export something without including it in the imports array.
 *  4.  Imports Array:
 *              imports: [
 *                  BrowserModule,
 *                  FormsModule,
 *                  HttpClientModule
 *              ]
 *      -   Adding a module to the imports array makes available any components, 
 *          directives, and pipes defined in that module's exports array
 *      -   Only import what this module needs.
 *      -   importing a module does NOT provide access to its imported modules.
 *      -   Use the imports array to register services provided by Angular or
 *          third-party modules.
 *  5.  Providers Array:
 *              providers: [
 *                  ProductService
 *              ]
 *      -   After angular 6, recommended way to provide service is via @Injectable  
 *                  @Injectable({
 *                      providedIn: 'root'
 *                  })
 *                  export class ProductService{...}
 */