import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product/product.service';
import { product } from '../index/products';
import {Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product:product[];
  constructor(private productservice:ProductService,private router:Router) { 
    this.productservice.getproduct()
      .subscribe(items => {
          //console.log(items);
          this.product=items;
          //console.log(this.product);
      });
      
  }

  onSelect(product){
    this.router.navigate(['/product',product.productid]);
  }



  ngOnInit() {
  }

}
