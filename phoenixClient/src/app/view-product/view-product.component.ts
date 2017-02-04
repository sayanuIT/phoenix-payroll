import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product/product.service';
import { product } from '../index/products';
import { ActivatedRoute, Params,Router } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
    product:product[];

    //load products
    productid:string;
    productname:string;
    producttype: string;
    internalreferance:string;
    barcode:string;
    inventorypolicy:string;
    sellingprice: number;
    cost:number;
    reorderlevel:number;
    warrenty:number;
    vat:number;



  constructor(private route:ActivatedRoute,private productservice:ProductService,private router:Router) {
    this.productservice.getproduct()
      .subscribe(items => {
          //console.log(items);
          this.product=items;
          console.log(this.productid);
      //assign values to variables
          const productname= this.product.find((product: any) => product.productid === this.productid ).productname;
          this.productname=productname;
          const producttype= this.product.find((product: any) => product.productid === this.productid ).producttype;
          this.producttype=producttype;
          const internalreferance= this.product.find((product: any) => product.productid === this.productid ).internalreferance;
          this.internalreferance=internalreferance;
          const barcode= this.product.find((product: any) => product.productid === this.productid ).barcode;
          this.barcode=barcode;
          const inventorypolicy= this.product.find((product: any) => product.productid === this.productid ).inventorypolicy;
          this.inventorypolicy=inventorypolicy;
          const sellingprice= this.product.find((product: any) => product.productid === this.productid ).sellingprice;
          this.sellingprice=sellingprice;
          const cost= this.product.find((product: any) => product.productid === this.productid ).cost;
          this.cost=cost;
          const reorderlevel= this.product.find((product: any) => product.productid === this.productid ).reorderlevel;
          this.reorderlevel=reorderlevel;
          const warrenty= this.product.find((product: any) => product.productid === this.productid ).warrenty;
          this.warrenty=warrenty;
          const vat= this.product.find((product: any) => product.productid === this.productid ).vat;
          this.vat=vat;
      });
    
   }


  ngOnInit() {
    var productid= this.route.snapshot.params['id'];
    this.productid=productid;
    
    
  }



}
