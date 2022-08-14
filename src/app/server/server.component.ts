import { Component } from "@angular/core";



@Component({
    //Tag HTML para reutilizar o componente, precisa se um nome unico
    selector: 'app-server' ,
    //Template HTML do componente
    templateUrl: './server.component.html',
    // styleUrls: ['./server.component.css']
    styles: [`
        .online {
            color: white;
        }
    `]

})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string;

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus() {
        return this.serverStatus
    }

    getColor()  {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}