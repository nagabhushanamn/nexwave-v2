import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map';


@Injectable()
export class ProductService {
  apiUrl: string = 'http://localhost:3000/api/products'

  constructor(private http: Http) { }

  getAllProducts() {
    return this.http.get(this.apiUrl)
      .map(resp => resp.json())
  }
  getProduct(id) {
    return this.http.get(this.apiUrl + '/' + id)
      .map(resp => resp.json())
  }
  deleteProduct(id) {
    return this.http.delete(this.apiUrl + '/' + id)
      .map(resp => resp.json())
  }
  addNewProduct(product) {
    return this.http.post(this.apiUrl, product)
      .map(resp => resp.json())
  }

}
