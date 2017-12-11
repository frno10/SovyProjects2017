//var socket = io();
var newPlayerLogin = function(){
  var name = document.getElementById('myName').value;
  var game = document.getElementById('myGame').value;
  myName = name;
  myGame = game;
  if (name == "" || game == "") {

  }
  else {
    socket.emit('newPlayer',{
        name: name,
        game: game,
        destinationID: myID,
        sourceID: "non"
    });
    document.getElementById("content").innerHTML = "";
  }
}

socket.on('serverNewPlayer',function(data){
    if (data.game == myGame) {
      //console.log("my game");
      if (data.destinationID != myID) {
        //console.log("not me");
        if (numberOfPlayers !== "full") {
          numberOfPlayers++;
        }
        console.log(numberOfPlayers);
        var swap = "";
        if (numberOfPlayers > 4 || numberOfPlayers == "full") {
          swap = "spectator";
        }
        else {
          swap = numberOfPlayers;
        }
        socket.emit('youArePlayer',{
            name: data.name,
            destinationID: data.destinationID,
            sourceID: myID,
            game: myGame,
            imPlayer: iamPlayer,
            iam: myName,
            playerNumber: swap
        });
      }
      else {
        //console.log("its me");
      }
    }
    else {
      //console.log("not my game");
    }
});

socket.on('serverYouArePlayer',function(data){
    //console.log(data.msg);
    if (data.game == myGame) {
      if (data.sourceID != myID && data.destinationID == myID) {
        console.log(data.playerNumber);
        if (data.playerNumber > iamPlayer ) {
          iamPlayer = data.playerNumber;
          document.getElementById("numerofp").innerHTML = "Iam player: " + iamPlayer;
        }
        else if (data.playerNumber == "spectator") {
          iamPlayer = "spectator";
          document.getElementById("numerofp").innerHTML = "Iam: " + iamPlayer;
        }
      }
    }

    if (data.playerNumber > numberOfPlayers || data.playerNumber == "spectator") {
      numberOfPlayers = data.playerNumber;
    }
});
