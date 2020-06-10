"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cors = require("cors");
const path = require("path");
var express = require('express');
const compression = require("compression");
const uiBuildPath = '../../dist';
class ExpressServer {
    constructor() {
        this.app = express();
    }
    init(port) {
        this.app.use(cors({ origin: true }));
        this.app.use(compression());
        console.log(path.join(__dirname, uiBuildPath));
        this.app.get('*.*', express.static(path.join(__dirname, uiBuildPath), { maxAge: '1y' }));
        this.app.all('*', function (_req, res) {
            res.status(200).sendFile(`/`, { root: path.join(__dirname, uiBuildPath) });
        });
        this.app.listen(port, () => {
            console.log("Node Express server for " + this.app.name + " listening on http://localhost:" + port);
        });
    }
}
exports.ExpressServer = ExpressServer;
//# sourceMappingURL=express-class.js.map