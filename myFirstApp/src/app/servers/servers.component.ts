import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  selector:'.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverCreated = false;
  allowNewServer = false;
  serverName ='Wow';
  serverCreationStatus = 'No server was created' 
  servers = ['TestServer1' , 'TestServer2'];
  constructor() {
    setTimeout(() =>{
      this.allowNewServer = true;
    } ,2000);
   }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created "+ this.serverName;
  }

  onUpdateServerName(event:any){
    // console.log(event);
    this.serverName= (<HTMLInputElement>event.target).value

  }
}
