import * as WebSocket from 'ws';
import {Message} from "./comms-message"

export class Comms {

    wss

    constructor(newPort: number) {
/*         httpsServer.listen(newPort); */
        this.wss = new WebSocket.Server({ port: newPort });
        this.startServer();
        console.log(`Websocket running on port ${newPort}`);
    }

    //Start the websocket server and handle messages recieved from clients
    private startServer () {
        this.wss.on('connection', (ws: WebSocket) => {

            //connection is up, let's add a simple simple event
            ws.on('message', (message: string) => {
                const newMessage: Message = JSON.parse(message)
                //log the received message and send it back to the client
                console.log('received: %s', JSON.stringify(newMessage));

                //Parse message from client
                switch(newMessage.Command as string) {
                    case 'echo':  ws.send(JSON.stringify({Command: 'echo', Data: newMessage.Data})); break;
                    default: {
                        console.log('comms: Bad command');
                        ws.send(JSON.stringify({Command: 'error', Data: `Unknown Command: ${newMessage.Command}`}));
                    }
                }
            });
        
            //send immediatly a feedback to the incoming connection 
            let rxMsg: Message = {Command:"",Data:""};
            rxMsg.Command = "connection-successful";
            rxMsg.Data = "connected to device";   
            ws.send(JSON.stringify(rxMsg));
        });
    }

    //Send messages to all connected clients
    public sendToAll(message: string) {
        this.wss.clients
        .forEach(client => {
            if (client != this.wss) {
                client.send(`${message}`);
            }    
        });
    }
}