/**
 *  Services:
 *  --------
 *  -   A class to perform some task.
 * 
 *  How Dependency Injection works in Angular:
 *  -----------------------------------------
 *  -   Dependency Injection is a coding pattern in which a class receives
 *      the instances of objects it needs (called dependencies) from an
 *      external source rather than creating them itself.
 *  -   We can register the Service with Angular which will create the
 *      singular instance of the service.
 *  -   If any component need to use that service, Angular Injector then
 *      injects the service class instance in the component class.
 *  -   This process is called Dependency Injection.
 *  -   It allows sharing of data and other resources and its the recommended way. 
 * 
 *  Building a Service:
 *  ------------------
 *  -   Create the Service class.
 *  -   Define the metadata with the decorator
 *  -   import what we need.
 * 
 *  Example : 
 *  -   Crete the Service:
 *              import { Injectable } from '@angular/core';
 *              
 *              @Injectable()
 *              export class ProductService{
 *                  getProducts(): IProduct[] {...}
 *              }
 *  -   Injecting the Service : through constructors.
 *          export class ProductListComponent{
 *              private _productService;
 *              constructor(productService: ProductService){
 *                  this._productService = productService;
 *              }     
 *          }
 * 
 *  -   Registering a Service through Root Injector : 
 *      -   Service is available throughout the application.
 *      -   Recommended for most Scenarios.
 *  -   Registering a Service through Component Injector:
 *      -   Service is available ONLY to that component and its child(nested).
 *      -   Isolates a service used by only one component.
 *      -   Provides multiple instances of the service.
 */