import { Component } from '@angular/core';
import { timestamp } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showSecret = false;
  log : number[] = []; 
//this is equal to  log = []  but typescript behaves in a strange way for legacy reasons    //number is the type of the array

  displaySecret(){
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1 )
    // to show timestamp
    // this.log.push(new Date());
  }
}
