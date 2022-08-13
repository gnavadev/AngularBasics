import { Component, OnInit } from '@angular/core';

@Component({
  //Utilizando [] o seletor eh passado   // selector: '[app-servers]', 
  //como atributo, ao inves de como uma tag. selector: 'app-servers',
  //pode ser usado como classe, assim como no css, dentro de um elemento html   selector: '.app-servers',
  selector: 'app-servers',
  //Template strings podem ser utilizadas para escrever
  //varias linhas de template, eh recomendado utilizar templateURL
  //linkado ao HTML do componente caso tenha mais de 3 linhas
  template:` 
  <app-server></app-server>
  <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
