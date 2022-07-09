import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  interval; 
  IntervalFired = new EventEmitter<number>();
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
