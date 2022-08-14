import { Component, OnInit } from '@angular/core';

@Component({
  //Utilizando [] o seletor eh passado   // selector: '[app-servers]', 
  //como atributo, ao inves de como uma tag. selector: 'app-servers',
  //pode ser usado como classe, assim como no css, dentro de um elemento html   selector: '.app-servers',
  selector: 'app-servers',
  //Template strings podem ser utilizadas para escrever
  //varias linhas de template, eh recomendado utilizar templateURL
  //linkado ao HTML do componente caso tenha mais de 3 linhas
  templateUrl: './servers.component.html',
  // template:` 
  // <app-server></app-server>
  // <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverUsernameCreationStatus = 'No username was binded to a server';
  serverCreated = false;
  servers = ['TestServer', 'TestServer 2'];
  serverName = "";
  username = "";


  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
    
  }

  onCreateServer()  {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  
  }

  resetUsername() {
    console.log(this.username);
    
    this.username = "";
    console.log(this.username);
    
  }

  onCreateServerUsername () {
    this.serverUsernameCreationStatus = 'Server ' + this.serverName +' was created! And is binded to ' + this.username;
  }

}
