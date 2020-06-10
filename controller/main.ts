
import {Comms} from "./comms/comms-class";
import {ExpressServer} from "./express/express-class"

let comms = new Comms(2506);
let app = new ExpressServer();
comms.sendToAll("device online");
app.init(1904);

process.on('SIGINT', () => {
    console.log('app is shutting down');
    process.exit(0);
});