import { NgModule } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { FrameComponent } from './frame/frame.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductComponent } from './product/product.component';
import { EditComponent } from './edit/edit.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes:Routes=[
      { path: 'addproduct', component: AddProductComponent},
      { path: 'product', component:ProductComponent}, 
      { path: 'purchaseorder', component:PurchaseOrderComponent},
      { path: 'product/:id', component:ViewProductComponent},
      { path: 'view-product', component:ViewProductComponent},
      { path: 'edit-product', component:EditComponent}
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule{}
export const routingComponents=[
    AddProductComponent,
    ProductComponent,
    PurchaseOrderComponent,
    ViewProductComponent,
    EditComponent
    
     ]
