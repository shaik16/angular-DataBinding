import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html'
})
export class ServersComponent{
  allowNewServer:boolean=false;
  serverCreationStatus='No server was created';
  serverName='Test';
  serve="Add Server";
  constructor(){
    setTimeout(() => {
      this.allowNewServer=true;
    }, 3000);
  }
  onCreateServer(){
    this.serverCreationStatus='Server was created! and Name is '+this.serverName;
    this.serve='Delete Server'
  }
  onDeleteServer(){
    this.serverCreationStatus='Server was Deleted! and Name is '+this.serverName;
    this.serve='Add Server'
  }

  onUpdateServerName(event){
    this.serverName=event.target.value;
  }
}
