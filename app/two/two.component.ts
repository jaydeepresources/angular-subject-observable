import { Component, OnInit } from '@angular/core';
import { MessagesService } from './../messages.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  message: string;

  constructor(private msg: MessagesService) { }

  ngOnInit() {
    this.msg.currentMessage.subscribe(message => this.message = message);
  }

  newMessage() {
    this.msg.changeMessage("Msg from Two");
  }

}
