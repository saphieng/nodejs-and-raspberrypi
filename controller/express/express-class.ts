  
import * as express from 'express';
import * as cors from 'cors';
import * as path from 'path';
var express  = require('express');
const compression = require("compression");
/* import * as fileSys from "fs";
import * as https from 'https';
let privatekey = fileSys.readFileSync(path.resolve(path.join(__dirname, "testcert.key")), 'utf8');
let certificate = fileSys.readFileSync(path.resolve(path.join(__dirname, "testcert.cert")), 'utf8'); */
const uiBuildPath: string = '../../dist';
export class ExpressServer {
    app
    constructor() {
        this.app = express();
    }

    init(port: number) {
        this.app.use(cors({ origin: true }));
        this.app.use(compression());
        console.log(path.join(__dirname, uiBuildPath));
        this.app.get('*.*', express.static(path.join(__dirname, uiBuildPath), {maxAge: '1y'}));
        this.app.all('*', function (_req, res) {
            res.status(200).sendFile(`/`, {root: path.join(__dirname, uiBuildPath)});
        });

        this.app.listen(port, () => {
            console.log("Node Express server for " + this.app.name + " listening on http://localhost:" + port);
          });
    }
}