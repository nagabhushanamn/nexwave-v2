import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

import _ from 'lodash';

@Component({
  selector: 'app-pmgrid',
  templateUrl: './pmgrid.component.html',
  styleUrls: ['./pmgrid.component.css']
})
export class PMGridComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router) { }

  products: any = [];

  ngOnInit() {
    this.route.data.subscribe(data => this.products = data.products)
  }

  editProduct(id, event) {
    event.preventDefault();
    let product = this.products.find(p => p.id === id);
    this.router.navigate(['pm-edit', id])
  }

  deleteProduct(id, event) {
    event.preventDefault();
    this.productService.deleteProduct(id)
      .subscribe(resp => {
        let idx = _.findIndex(this.products, function (o) { return o.id == id; });
        this.products.splice(idx, 1)
      })

  }

}
