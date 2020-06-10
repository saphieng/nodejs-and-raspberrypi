import { Component, OnInit } from '@angular/core';
import {CommsService} from '../../comms/comms.service'
import {Message} from '../../global-interfaces/comms-message'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  commandAndData: string = null;
  receivedData: string = null;
  constructor(private comms: CommsService) { }

  ngOnInit(): void {
    this.comms.messages.subscribe((newMessage: Message) => {
      if (newMessage) {
        this.receivedData = `${newMessage.Command}: ${newMessage.Data}`;
      }
    })
  }

  async send() {
    const newCommand: string = this.commandAndData.split(" ")[0];
    const newData: string = this.commandAndData.substr(this.commandAndData.indexOf(" ") + 1);
    //special command to start websocket connection
    if (newCommand === "connect") {
       await this.comms.connect(newData).catch(err => {this.receivedData = err});
    }
    else{ //send everything else to websockets
      const newMessage: Message = {Command: newCommand, Data: newData}
      console.log(`tx: ${JSON.stringify(newMessage)}`);
      this.comms.send(newMessage).catch(err => {this.receivedData = err});
    }

  }

}
