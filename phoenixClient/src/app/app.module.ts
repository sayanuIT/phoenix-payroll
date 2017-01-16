import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { FrameComponent } from './frame/frame.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    FrameComponent,
    SideMenuComponent,
    PurchaseOrderComponent,
    AddProductComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    [MaterialModule.forRoot()],
    RouterModule.forRoot([
      { path: 'addproduct', component: AddProductComponent},
      { path: 'product', component:ProductComponent}, 
      { path: 'purchaseorder', component:PurchaseOrderComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
