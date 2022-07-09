import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation : ViewEncapsulation.None //used to globalize styling the defaul is ViewEncapsulation.emulated  //you can also use ViewEncapsulation.Native which is the same as .None
})
export class ServerElementComponent implements OnInit {
@Input('srvElement') element: {type : string,name : string ,content: string};

constructor() { }

  ngOnInit(): void {
  }

}
