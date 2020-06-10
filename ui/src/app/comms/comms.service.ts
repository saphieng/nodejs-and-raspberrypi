import { Injectable } from '@angular/core';
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';
import { Observable, BehaviorSubject, from } from 'rxjs';
import {Message} from '../global-interfaces/comms-message'


@Injectable({
  providedIn: 'root'
})
export class CommsService {

  connectionSocket: WebSocketSubject<any> = null;
  messages: BehaviorSubject<Message> = new BehaviorSubject<Message>(null);

  constructor() { }

  connect(ipAndPort: string): Promise<string> {
    return new Promise<string> (async (resolve,reject) => {
      try {
        this.connectionSocket = await webSocket(`ws://${ipAndPort}`);
        this.connectionSocket.asObservable().subscribe((newMesage: Message) => {
          if (newMesage) {
            console.log(`data rx: ${JSON.stringify(newMesage)}`);
            this.messages.next(newMesage);
          }
          
        })
        resolve()
      }
      catch(err) {
        reject(err);
      }
      
    })
  }

  send(message: Message): Promise<string> {
    return new Promise((resolve, reject) => {
      try {
        this.connectionSocket.next((message));
        resolve()
      }
      catch(err) {
        reject(err);
      }
    })

  }

  disconnect() {
    if (this.connectionSocket) {
      this.connectionSocket.unsubscribe();
    }
  }

}
