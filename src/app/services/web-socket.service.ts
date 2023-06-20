import { Injectable } from '@angular/core';
import {chatMessageDto} from "../model/chatMessageDto";

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  webSocket: WebSocket;
  chatMessages: chatMessageDto[] = [];

  constructor() { }

  public openWebSocket(){
    this.webSocket = new WebSocket('ws://localhost:8081/chat');

    this.webSocket.onopen = (event) => {
      console.log('Open: ', event);
    };

    this.webSocket.onmessage = (event) => {
      const chatMessageDto = JSON.parse(event.data);
      this.chatMessages.push(chatMessageDto);
    };

    this.webSocket.onclose = (event) => {
      console.log('Close: ', event);
    };
  }

  public sendMessage(chatMessage: chatMessageDto){
    this.webSocket.send(JSON.stringify(chatMessage));
  }

  public closeWebSocket() {
    this.webSocket.close();
  }
}
