import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ProductService } from "./product.service";
import { IProduct } from "./products";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',  // For template
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit, OnDestroy{
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = true;
    
    //listFilter: string = 'cart';
    // Filtering data -- start
    private _listFilter: string = '';
    get listFilter(): string {
      return this._listFilter;
    }
    set listFilter(value: string) {
      this._listFilter = value;
      console.log('In setter:', value);
      this.filteredProducts = this.performFilter(value);
    }

    filteredProducts: IProduct[] = [];

    performFilter(filterBy: string): IProduct[] {
      filterBy = filterBy.toLocaleLowerCase();
      return this.products.filter((product: IProduct) => 
          product.productName.toLocaleLowerCase().includes(filterBy));
    }
    // Filtering data -- end

    // List of products
    /*
    products: IProduct[] = [
      {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2021",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 3,
        "imageUrl": "assets/images/garden_cart.png"
      },
      {
        "productId": 5,
        "productName": "Hammer",
        "productCode": "TBX-0048",
        "releaseDate": "May 21, 2021",
        "description": "Curved claw steel hammer",
        "price": 8.9,
        "starRating": 4.8,
        "imageUrl": "assets/images/hammer.png"
      }
    ];
    */

    // changing the boolean flag to show/hide image  
    toggleImage(): void {
      this.showImage = !this.showImage;
    }

    // On clicking on rating , this function will be called & title will be cahnged.
    onRatingClicked(message: string): void {
      this.pageTitle = 'Product List: ' + message;
    }

    // Injecting a service
    products: IProduct[] = [];
    constructor(private productService: ProductService){}

    // Life Cycle hook for initialization
    // ngOnInit(): void {
    //   this.products = this.productService.getProducts();
    //   this.filteredProducts = this.products;
    //   //  console.log('In OnInit() method');
    //   //  this.listFilter = 'cart';
    // }

    // using observables and rxjs
    errorMessage : string = "";
    sub! : Subscription;  // ! means that we will handle the assignment in some later point.
    ngOnInit(): void {
      this.sub = this.productService.getProducts().subscribe({
        next: products => {
          this.products = products;
          this.filteredProducts = this.products;
        },
        error: err  => this.errorMessage = err
      });
    }
    ngOnDestroy(): void {
      //console.log(JSON.stringify(this.products));
      this.sub.unsubscribe();
    }
}