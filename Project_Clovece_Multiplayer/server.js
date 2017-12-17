var express = require('express');
var app = express();
var serv = require('http').Server(app);

app.get('/',function(req, res) {
    res.sendFile(__dirname + '/client/index.html');
});
app.use('/client',express.static(__dirname + '/client'));

serv.listen(2000);
console.log("Server started.");


var io = require('socket.io')(serv,{});
io.sockets.on('connection', function(socket){
    console.log('new socket connection');

    //socket.on('roll',function(data){
    //    console.log('happy because ' + data.reason);
    //});

    socket.on('youArePlayer',function(data){
        socket.broadcast.emit('serverYouArePlayer',data);
    });

    socket.on('newPlayer',function(data){
        socket.broadcast.emit('serverNewPlayer',data);
    });

    socket.on('whatGamesAreActive',function(data){
        socket.broadcast.emit('serverWhatIsYourGame',data);
    });

    socket.on('myGameIs',function(data){
        socket.broadcast.emit('serverGamesAre',data);
    });

    socket.on('nextPlayer',function(data){
      //console.log(data);
        socket.broadcast.emit('serverPlayerOnTurn',data);
    });

    socket.on('movePawn',function(data){
        socket.broadcast.emit('serverMovePawn',data);
    });

    socket.on('moveToHome',function(data){
        socket.broadcast.emit('serverMoveToHome',data);
    });

    socket.on('movePawnFromHome',function(data){
        socket.broadcast.emit('serverMovePawnFromHome',data);
    });

});
