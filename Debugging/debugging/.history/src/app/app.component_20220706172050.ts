import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers=[]; //servers was declared but not defined to an array 

  onAddServer() {
    this.servers.push('Another Server');
  }

  onRemoveServer(id: number) {
    const position = id ; //removed +1 from here so the same item clicked is deleted not the one after
    this.servers.splice(position, 1);
  }
}
