import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {
  @Input() number: number; //in order for this to work you have to go to tsconfig.json and add "strictPropertyInitialization": false

  constructor() { }

  ngOnInit(): void {
  }

}
