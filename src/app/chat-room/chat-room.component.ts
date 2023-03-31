// chat-room.component.ts
import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { io, Socket } from 'socket.io-client';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent {
  private socket: Socket;
  public message: string | undefined;
  public messages: any[] = [];
  public name: any="";
  public joiningMessage:string[]=[]
  constructor(private route:Router) {
    this.socket = io('http://44.201.63.57:3000'); // replace with your server URL
    this.socket.on('message', (msg: string) => {
      console.log(msg)
      this.messages.push(msg);
    });
    this.socket.on('joiningMessage', (msg: string) => {
    this.joiningMessage.push(msg);
    });
    this.name ={...this.route?.getCurrentNavigation()?.extras?.state};
    console.log(`${this.name.msg} has joined the chat!`)
    this.socket.emit('joiningMessage', `${this.name.msg} has joined the chat!`);
  }

  public sendMessage() {
    this.socket.emit('message', {name:this.name.msg,message:this.message});
    this.message = '';

  }
}
