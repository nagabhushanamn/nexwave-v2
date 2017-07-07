import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hit-button',
  templateUrl: './hit-button.component.html',
  styleUrls: ['./hit-button.component.css']
})
export class HitButtonComponent implements OnInit {


  @Input()
  label: number;

  @Output()
  hit = new EventEmitter();

  constructor() {
    //console.log("HitButtonComponent instance created");
  }

  ngOnInit() {
  }

  onClick() {
    console.log('emitting hit event..');
    this.hit.emit({ value: this.label , hitBy:'Yash'})
  }

}
