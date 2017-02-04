import { Component, OnInit } from '@angular/core';

import { ProductService } from '../services/product/product.service';
import { product } from '../index/products';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product:product[];

    productid: string;
    productname: string; 
    producttype: string;
    internalreferance:string;
    barcode:string;
    inventorypolicy:string;
    sellingprice: number;
    cost:number;
    reorderlevel:number;
    warrenty:number; 
    vat:number;




  constructor(private productservice: ProductService) { }

  ngOnInit(){

  }

addItem($event){
  event.preventDefault();
    var newItem={
      productid:this.productid,
      productname:this.productname,
      producttype:this.producttype,
      internalreferance:this.internalreferance,
      barcode:this.barcode,
      inventorypolicy:this.inventorypolicy,
      sellingprice:this.sellingprice,
      cost:this.cost,
      reorderlevel:this.reorderlevel,
      warrenty:this.warrenty,
      vat:this.vat
    }
    this.productservice.addProduct(newItem)
      .subscribe(item => {
        this.product.push(item);

      });


}



  

}
