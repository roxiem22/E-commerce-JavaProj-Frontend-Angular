import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import {chatMessageDto} from "../../model/chatMessageDto";
import {WebSocketService} from "../../services/web-socket.service";
import {Router} from "@angular/router";

@Component({
  selector: 'cf-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {

  constructor(public webSocketService: WebSocketService,
              private router: Router,) { }

  ngOnInit(): void {
    this.webSocketService.openWebSocket();
  }

  ngOnDestroy(): void {
    this.webSocketService.closeWebSocket();
  }

  sendMessage(sendForm: NgForm) {
    const chatMessage = new chatMessageDto(sendForm.value.user, sendForm.value.message);
    this.webSocketService.sendMessage(chatMessage);
    sendForm.controls.message.reset();
  }

  goBack() {
    this.router.navigate(['user']);
  }
}
