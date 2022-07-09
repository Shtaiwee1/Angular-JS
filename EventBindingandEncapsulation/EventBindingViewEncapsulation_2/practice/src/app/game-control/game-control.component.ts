import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  interval;  //in order for this to work in a modern version of angular you have to add  "noImplicitAny": false  in the tsconfig.json file
  @Output() IntervalFired = new EventEmitter<number>();
  lastNumber = 0;


  constructor() { }

  ngOnInit(): void {
  }

  onStartGame(){
    this.interval = setInterval(()=>{
    this.IntervalFired.emit(this.lastNumber+1);
    this.lastNumber++;
  } ,1000)
  }

  onPauseGame(){
    clearInterval(this.interval);
  }

}
function output() {
  throw new Error('Function not implemented.');
}

