import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-pmproduct-view',
  templateUrl: './pmproduct-view.component.html',
  styleUrls: ['./pmproduct-view.component.css']
})
export class PMProductViewComponent implements OnInit {

  product: any = {};
  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {

    // way-1 : if route params do not change
    // let id = this.route.snapshot.params['prodId']

    //way-2 : wen re-using component , on different route params
    this.route.params.map(params => params['prodId'])
      .subscribe(id => {
        this.productService.getProduct(id)
          .subscribe(product => this.product = product)
      })

  }

}
