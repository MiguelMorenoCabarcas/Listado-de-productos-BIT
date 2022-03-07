import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from './models/product';
import { ProductService } from './services/products/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(public productService: ProductService) {} 

  ngOnInit(): void {
  }

  getProducts(){
    this.productService.getProducts().subscribe(
      (data: any) => this.productService.products = data.products
    )
  }
 

  

}
