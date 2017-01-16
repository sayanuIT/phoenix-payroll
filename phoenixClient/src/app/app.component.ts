import { Component } from '@angular/core';
import { PurchaseOrderService } from './services/purchase-order/purchase-order.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[PurchaseOrderService]
})
export class AppComponent {
  title = 'app works!';
}
