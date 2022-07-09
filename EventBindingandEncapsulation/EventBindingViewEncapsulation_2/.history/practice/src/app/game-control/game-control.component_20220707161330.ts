import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  Interval; 
  onIntervalFired = new EventEmitter<number>();
  lastNumber = 0;


  constructor() { }

  ngOnInit(): void {
  }

  onStartGame(){
this.Interval = setInterval(=>{
this.Interval.emit(this.lastNumber+1)
lastNumber++;
} ,1000)
  }

  onPauseGame(){

  }

}
