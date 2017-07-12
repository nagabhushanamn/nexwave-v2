import {TxrService} from '../txr.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  status = ''

  constructor(private txrService: TxrService) {}

  ngOnInit() {
    this.status = this.txrService.message;
    this.txrService.message = '';
  }

}
