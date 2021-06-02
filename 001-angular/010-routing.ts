/**
 *  Routing:
 *  =======
 *  -   With routing, we define the path through the application and user action
 *      required to access each path.
 *  -   Besically it helps in navigation. It can be menu option, image or button
 *      that activates that route.
 *      -   Typing the URL in the address bar/bookmark
 *      -   browser's forward or back buttons.
 * 
 *  -   Angular is an one page application so whatever number of views/component
 *      we are creating will reside on one page. So, what page to diplay when is 
 *      the purpose of routing.
 *  
 *  How Routing works?
 *  -----------------
 *  -   Configure a route for each component
 *  -   define options/actions
 *  -   Tie a route to each option/action
 *  -   Activate the route based on user action
 *  -   Activating the route displays the component's view.
 *  Example:
 *          <a routerLink="/products">Product List</a>
 *                      |
 *          {path: 'products',component: ProductListComponent}
 *                      |
 *          <router-outlet></router-outlet>
 * 
 *  RouterModule:
 *  ------------
 *  -   RouterModule registers the routing service.
 *  -   Declares the router directives
 *  -   Exposing configured routes
 * 
 *  Configuring Routes:
 *  ------------------
 *  -   Router will look for the first match in routing definites below.
 *  -   defined path below should not have "/" in begining.
 *  -   In app.module.ts
 *              import { RouterModule } from '@angular/router';
 *              
 *              @NgModule({
 *                  imports:[
 *                      BrowserModule,
 *                      HttpClientModule,
 *                      RouterModule.forRoot([
 *                          {path:'products', component: ProductListComponent},
 *                          {path:'products/:id', component: ProductDetailComponent}
 *                          {path:'welcome', component: WelcomeComponent}
 *                          {path:'', redirectTo: 'welcome', pathmodule: 'full'}
 *                          {path:'**', component: PageNotFoundComponent}
 *                      ])
 *                  ]
 *              })
 * 
 *  Read Parameters from a Route:
 *  ----------------------------
 *  -   First we need the create instance of 'ActivatedRoute' service
 *              import {ActivatedRoute} form '@angular/route';
 *              constructor(private route: ActivatedRoute)
 * 
 *  -   Snapshot : read parameter one time:
 *          this.route.snapshot.paramMap.get('id');
 *  -   Observable: read emitted parameters as they change
 *          this.route.paramMap.subscribe(
 *              params => console.log(params.get('id'))
 *          );
 * 
 *  Protecting Routes with Guards:
 *  -----------------------------
 *  -   CanActivate:
 *      -   guard navigation to a route
 *  -   CanDeactivate:
 *      -   guard navigation from a route.
 *  -   Resolve:
 *      -   pre-fetch data before activating a route
 *  -   CanLoad:
 *      -   prevent asynchronous routing.
 */