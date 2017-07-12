import {TxrService} from '../txr.service';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-txr-form',
  templateUrl: './txr-form.component.html',
  styleUrls: ['./txr-form.component.css']
})
export class TxrFormComponent implements OnInit {

  txrForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private txrService: TxrService,
    private router: Router) {}

  ngOnInit() {
    this.txrForm = this.fb.group({
      amount: ['', Validators.required],
      fromAccNum: ['', Validators.required],
      toAccNum: ['', Validators.required]
    })
  }

  doTxr() {
    this.txrService.txr(this.txrForm.value)
      .subscribe(res => {
        this.txrService.message = res.message;
        this.router.navigate(['status'])
      })
  }

}
