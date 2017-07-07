import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-app',
  templateUrl: './counter-app.component.html',
  styleUrls: ['./counter-app.component.css']
})
export class CounterAppComponent implements OnInit {

  //state
  currentCount: number = 10;

  constructor() { }

  ngOnInit() {
    let self=this;
    setInterval(()=>{
      console.log('inc..')
      this.currentCount++;
    },2000)
  }

  onHitClick(event) {
    console.log('Handling hit event...');
    this.currentCount += +event.value;
  }

}
