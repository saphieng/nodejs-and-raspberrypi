"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WebSocket = require("ws");
class Comms {
    constructor(newPort) {
        this.wss = new WebSocket.Server({ port: newPort });
        this.startServer();
        console.log(`Websocket running on port ${newPort}`);
    }
    startServer() {
        this.wss.on('connection', (ws) => {
            ws.on('message', (message) => {
                const newMessage = JSON.parse(message);
                console.log('received: %s', JSON.stringify(newMessage));
                switch (newMessage.Command) {
                    case 'echo':
                        ws.send(JSON.stringify({ Command: 'echo', Data: newMessage.Data }));
                        break;
                    default: {
                        console.log('comms: Bad command');
                        ws.send(JSON.stringify({ Command: 'error', Data: `Unknown Command: ${newMessage.Command}` }));
                    }
                }
            });
            let rxMsg = { Command: "", Data: "" };
            rxMsg.Command = "connection-successful";
            rxMsg.Data = "connected to device";
            ws.send(JSON.stringify(rxMsg));
        });
    }
    sendToAll(message) {
        this.wss.clients
            .forEach(client => {
            if (client != this.wss) {
                client.send(`${message}`);
            }
        });
    }
}
exports.Comms = Comms;
//# sourceMappingURL=comms-class.js.map