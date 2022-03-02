'use strict';

const express = require('express');
const cowsay = require('cowsay');
// Constants
const hostname = '0.0.0.0';
const port = 8080;

// App
const app = express();

let messages = [
    'Mooo!!',
    'Hello World!!',
    'Today is a good day!!'
];

// GET method route
app.get('/', function (req, res) {
    let message = messages[Math.floor(Math.random()*3)];

    const responseText = `
        <pre>${cowsay.say({ text: message, e: "oO", T: "U " })}</pre>
        <br/><br/>
    `;
    res.send(responseText);
});

app.listen(port, hostname);
console.log(`Running on http://${hostname}:${port}`);