import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pmproduct-form',
  templateUrl: './pmproduct-form.component.html',
  styleUrls: ['./pmproduct-form.component.css']
})
export class PMProductFormComponent implements OnInit {

  productForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router) { }

  ngOnInit() {
    this.productForm = this.fb.group({
      name: [''],
      price: [''],
      makeDate: [''],
      description: ['']
    });
  }

  saveProduct() {
    if (this.productForm.valid) {
      this.productService.addNewProduct(this.productForm.value)
        .subscribe(product => {
          this.router.navigate(['/products']);
          this.productForm.reset();
        })
    }
  }


}
