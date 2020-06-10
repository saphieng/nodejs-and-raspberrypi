"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const comms_class_1 = require("./comms/comms-class");
const express_class_1 = require("./express/express-class");
let comms = new comms_class_1.Comms(2506);
let app = new express_class_1.ExpressServer();
comms.sendToAll("device online");
app.init(1904);
process.on('SIGINT', () => {
    console.log('app is shutting down');
    process.exit(0);
});
//# sourceMappingURL=main.js.map