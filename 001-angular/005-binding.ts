/**
 *  Binding:
 *  =======
 *  -   Coordinates communication between the component's class and its template
 *      and often involves passing data.
 *              
 *              Template -> Class (properties, methods)
 *              Template <- Class (properties, methods)
 * 
 *  Interpolation :
 *  ---------------
 *  -   One way binding from class properties to templates
 *  -   We can use it evaluation expression.
 *      Ex:         <h1>{{pageTitle}}  : property</h1>      // template expression 
 *                  {{'Title: ' + pageTitle}}
 *                  {{2*20+1}}
 *                  <h1 innerText={{pageTitle}}></h1>
 * 
 *  Property Binding:
 *  ----------------
 *  -   Allows us to set property of an element to the value of template expression.
 *              <img [src] = 'product.imageUrl'>
 *              <img src = {{product.imageUrl}}>    //using interpolation
 * 
 *  Event Binding:
 *  -------------
 *  -   To bind action for an event:
 *          <button (click)='toggleImage()'>
 * 
 *  Two way binding:
 *  ---------------
 *  -   The way to pass data from templates to components and components to templates.
 *      Ex: If we want to filter data : TextField to put data to be searched.
 *          <input type='text' [(ngModel)]='listFilter' />  // We would need to add FormsMudule 
 *                                                          // to main module
 *          <h4>Filtered by: {{listFilter}}</h4>
 * 
 *  Pipes (|)
 *  -----
 *  -   We can use pipes to transform our data to specific format by passing parameters.
 *      Ex : 
 *          <td>{{ product.productCode | lowercase }}</td>
 *          <td>{{ product.price | currency:'USD':'symbol':'1.2-2'}}</td>
 *  -   Custom Pipe:
 *          import { Pipe, PipeTransform } from '@angular/core';
 *          
 *          @Pipe({
 *              name: 'convertToSpaces'
 *          })
 *          export class ConvertToSpacePipe implements PipeTransform{
 *              transform(value: string, character: string) : string {...}
 *          }
 */