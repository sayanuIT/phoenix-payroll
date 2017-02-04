import { Component } from '@angular/core';
import { PurchaseOrderService } from './services/purchase-order/purchase-order.service'
import { ProductService } from './services/product/product.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[PurchaseOrderService,ProductService]
})
export class AppComponent {
  title = 'app works!';
}
