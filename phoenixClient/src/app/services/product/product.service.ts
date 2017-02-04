import { Injectable } from '@angular/core';
import{Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  constructor(private http:Http) { }

  getproduct(){
    return this.http.get('http://localhost:3000/product')
      .map(res => res.json());
  }


  addProduct(newProduct){
    console.log(newProduct);
    var headers =new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/item', JSON.stringify(newProduct), {headers: headers})
      .map(res => res.json());
  
  }

}


