import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  Interval;


  constructor() { }

  ngOnInit(): void {
  }

  onStartGame(){
this.Interval = setInterval(=>{

} ,1000)
  }

  onPauseGame(){

  }

}
