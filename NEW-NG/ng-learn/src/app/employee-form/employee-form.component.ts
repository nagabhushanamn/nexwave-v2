import { Component, OnInit } from '@angular/core';

import 'rxjs/add/operator/debounceTime';

import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  AbstractControl
} from '@angular/forms'

import {
  rangeValidator,
  emailsMatchValidator
} from '../custom-validators';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  employee: any = { firstName: '', lastName: '' } // data-model
  employeeForm: FormGroup;

  firstNameMessage:string;
  private validationMessages = {
      required: 'This field is requoired',
      minlength: 'This field has minlength error'
  };

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {

    // this.employeeForm = new FormGroup({
    //   firstName: new FormControl(''),
    //   lastName: new FormControl(''),
    //   email: new FormControl(''),
    //   sendCatalog: new FormControl(true)
    // })


    this.employeeForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(4)]],
      lastName: [''],
      emailGroup: this.fb.group({
        email: ['', Validators.required],
        cemail: ['', Validators.required],
      }, { validator: emailsMatchValidator }),
      phone: [''],
      notification: ['email'],
      range: ['', [Validators.required, rangeValidator]],
      sendCatalog: [true]
    })


    let firstNameControl=this.employeeForm.get('firstName');
    firstNameControl.valueChanges.debounceTime(3000).subscribe(value=>{
      // console.log(JSON.stringify(value))
      this.setMessage(firstNameControl)
    })

    this.employeeForm.get('firstName')
    .statusChanges
    .subscribe(value=>{
      console.log(JSON.stringify(value))
    })

  }

  
  setMessage(c: AbstractControl): void {
        this.firstNameMessage = '';
        if ((c.touched || c.dirty) && c.errors) {
            this.firstNameMessage = Object.keys(c.errors).map(key =>
                this.validationMessages[key]).join(' ');

            console.log(this.firstNameMessage)    
        }
    }

  loadEmployee() {
    this.employee = { firstName: 'Nag', email: 'nag@email.com', sendCatalog: false };
    // this.employeeForm.setValue(this.employee);
    this.employeeForm.patchValue(this.employee);
  }

  onNotificationChange(notificationValue) {
    let phoneControl = this.employeeForm.get('phone');
    phoneControl.clearValidators();
    if (notificationValue === 'phone') {
      phoneControl.setValidators(Validators.required);
    }
    phoneControl.updateValueAndValidity();
  }

}
