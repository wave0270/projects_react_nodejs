// app.js
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/bower_components'));
app.get('/', function(req, res,next) {
    res.sendFile(__dirname + '/index.html');
});

server.listen(4200);

io.on('connection', function(client) {
    console.log('Client connected...');
    /*listen 'join' event on client*/
    client.on('join', function(data) {
        console.log(data);
    });

    /*listen 'messages' event on client*/
    client.on('messages', function(data) {
       /*send to specified client which send 'messages' event*/
       client.emit('broad', data);
       /*send to all client which listening 'broad' event*/
       client.broadcast.emit('broad',data);
    });
});
