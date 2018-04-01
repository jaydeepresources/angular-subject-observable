import { Component, OnInit } from '@angular/core';
import { MessagesService } from './../messages.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  message:string;
  sub:any;

  constructor(private msg:MessagesService) {
    
  }

  ngOnInit() {
   this.sub = this.msg.currentMessage.subscribe(message => this.message = message);    
  }

  newMessage() {
    this.msg.changeMessage("Msg from One");
  }

  stopReceiving(){
    this.sub.unsubscribe();
  }

}
