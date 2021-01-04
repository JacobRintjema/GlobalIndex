import { routes } from './routes'; 
const express = require('express');

const app = express();

app.use((req: any, res: any, next: any) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUSH, DELETE');

    if ('OPTIONS' == req.method) {
        res.sendStatus(200);
    } else {
        console.log(`${req.ip} ${req.method} ${req.url}`);
        next();
    }
})

// Handle POST requests that come in formatted as JSON
app.use(express.json());
app.use('/', routes);

app.listen(4201, '127.0.0.1', function() {
    console.log('Server now listening on 4201');
})