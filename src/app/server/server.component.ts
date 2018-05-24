import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
serverState = '';
  constructor() {
    this.serverState = Math.random() > 0.5 ? 'online' : 'offline';
   }
   getColor(){
     return this.serverState == 'online' ? 'green' : 'red';
   }

  ngOnInit() {
  }

}
