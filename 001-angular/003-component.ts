/**
 *  Component:
 *  =========
 *  -   Template : View Layout for our application.
 *      -   Created with HTML
 *      -   Includes binding and directives.
 *  -   Class :
 *      -   Code Supporting the view
 *      -   Created with TypeScript
 *      -   Properties: data
 *      -   Methods : logic
 *              //class
 *              export class AppComponent{
 *                  pageTitle : string = "My Title";
 *              }
 * 
 *  -   Metadata:
 *      -   Extra Data for Angular
 *      -   Defined with a decorator.
 *      -   selector : directive name used in HTML for custom tags.
 *      -   {{pageTitle}} : binds the data
 * 
 *              //decorator
 *              @Component({
 *                  selector : 'pm-root';
 *                  template : `
 *                          <div>
 *                              <h1>{{pageTitle}}</h1>
 *                              <div>My First Component</div>
 *                          </div>`
 *              })
 * 
 *  -   Before we use an external function or class we define where to find it.
 *                  // module name       //angular library
 *          import {AppComponent} from '@angular/core';
 * 
 * 
 *  Life Cycle Hooks of Angular Components:
 *  ======================================
 *  -   Component has life cycle managed by Angular.
 *          Create -> Render -> create and render children -> process changes -> destroy
 *  -   A lifecycle hook is an interface we implement when a component lifecycle 
 *      event occurs.
 *  -   Hooks :
 *      1.  OnInit:
 *          -   To perform any component initialization, retrieve data.
 *      2.  OnChanges:
 *          -   To perform action after change to input properties.
 *      3.  OnDestroy:
 *          -   To perform any cleanup befor Angular destroys the component.
 * 
 *  -   Use of lifecycle hook:
 *              import {Component, OnInit} from '@angular/core';
 *              export class ProductListComponent implements OnInit{
 *                  pageTitle: string = 'Product List';
 *                  showImage: boolean = false;
 *                  products : IProduct[] = [....]
 *                  
 *                  ngOnInit(): void {
 *                      console.log('In OnInit');
 *                  }
 *              }
 * 
 *  Nested Component:
 *  ----------------
 *  -   Example : Consider an example - We want to created view product ratings as stars.
 *  -   We would create a StartCompoment using using <fa fa-star> i.e. font awesome.
 *  -   Now, we want to send the data from StarComponent to parent component , In the 
 *      below code, @Input decorative is used to get the input from template and 
 *      @Output decorator is used to send output to the templplate or parent component.
 *      -   <pm-star [rating]='product.starRating' (ratingClicked)='onRatingClicked($event)'>
 *      -   onRatingClicked($event) - to be defined in parent component i.e. product-list module.
 *              import { Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";
 *              @Component({
 *                  selector: 'pm-star',
 *                  templateUrl: './star.component.html'
 *                  star.component.css']
 *              })
 *              export class StarComponent implements OnChanges {
 *                  @Input() rating: number = 0;
 *                  cropWidth: number = 75;
 *                  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
 *          
 *                  ngOnChanges(): void {       
 *                      this.cropWidth = this.rating * 75 / 5;
 *                  }
 *                  onClick(): void {
 *                      this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
 *                  }
 *              }
 */



