import {
  Component,
  OnInit,
  Input,
  OnChanges,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy, SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {

  @Input()
  message = '';

  constructor() {
    console.log('comp:constructor');
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }

  ngOnInit() {
    console.log('comp:ngOnInit');
  }

  ngDoCheck() {
    console.log('comp:ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('comp:ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('comp:ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('comp:ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('comp:ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('comp:ngOnDestroy');
  }


}
