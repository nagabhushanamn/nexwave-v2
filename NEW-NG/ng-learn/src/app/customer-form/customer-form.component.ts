import { Component, OnInit } from '@angular/core';

import { Customer } from '../customer';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  customerModel: Customer = new Customer("", "");

  constructor() { }

  ngOnInit() {
  }

  loadCustomer() {
    this.customerModel = new Customer("Nag", "N")
  }

  createOrUpdateCustomer(formGroup,event) {
    event.preventDefault();
    console.log(formGroup.value);
    console.log(this.customerModel)
  }

}
