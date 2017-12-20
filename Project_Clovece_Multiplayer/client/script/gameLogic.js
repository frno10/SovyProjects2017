var globalNum;
var turn=1;
var numberOfRolls = 1;
var playerOnTurnRolls = 0;
var playerOnTurn = "yellow";
var playerMoved = true;
var diceImg;
var circle=document.createElement("img");
circle.setAttribute("src", "/client/img/turn.png");

var gameStatePositions = "";
var gameStateCounters = "";

function generateGameboard()
{
  var board='url(/client/img/board.png)';
  document.getElementById('background').style.backgroundImage=board;
  document.getElementById('background').style.boxShadow='13px 13px 27px 7px rgba(0,0,0,0.75)';
    var gameboardClass = [
                           ["redpawn", "redpawn", "none", "none", "other", "other", "blue", "none", "none", "bluepawn", "bluepawn"],
                           ["redpawn", "redpawn", "none", "none", "other", "blue", "other", "none", "none", "bluepawn", "bluepawn"],
                           ["none", "none", "none", "none", "other", "blue", "other", "none", "none", "none", "none"],
                           ["none", "none", "none", "none", "other", "blue", "other", "none", "none", "none", "none"],
                           ["red", "other", "other", "other", "other", "blue", "other", "other", "other", "other", "other"],
                           ["other", "red", "red", "red", "red", "none", "green", "green", "green", "green", "other"],
                           ["other", "other", "other", "other", "other", "yellow", "other", "other", "other", "other", "green"],
                           ["none", "none", "none", "none", "other", "yellow", "other", "none", "none", "none", "none"],
                           ["none", "none", "none", "none", "other", "yellow", "other", "none", "none", "none", "none"],
                           ["yellowpawn", "yellowpawn", "none", "none", "other", "yellow", "other", "none", "none", "greenpawn", "greenpawn"],
                           ["yellowpawn", "yellowpawn", "none", "none", "yellow", "other", "other", "none", "none", "greenpawn", "greenpawn"]
                         ];
    var gameboardID = [
                        ["red-Start-1", "red-Start-2", "", "", "9", "10", "11", "", "", "blue-Start-1", "blue-Start-2"],
                        ["red-Start-3", "red-Start-4", "", "", "8", "blue-Home-1", "12", "", "", "blue-Start-3", "blue-Start-4"],
                        ["name2", "", "onturn2", "", "7", "blue-Home-2", "13", "", "onturn3", "name3", ""],
                        ["", "", "", "", "6", "blue-Home-3", "14", "", "", "", ""],
                        ["1", "2", "3", "4", "5", "blue-Home-4", "15", "16", "17", "18", "19"],
                        ["40", "red-Home-1", "red-Home-2", "red-Home-3", "red-Home-4", "dice", "green-Home-4", "green-Home-3", "green-Home-2", "green-Home-1", "20"],
                        ["39", "38", "37", "36", "35", "yellow-Home-4", "25", "24", "23", "22", "21"],
                        ["", "", "", "", "34", "yellow-Home-3", "26", "", "", "", ""],
                        ["name1", "", "onturn1", "", "33", "yellow-Home-2", "27", "", "onturn4", "name4", ""],
                        ["yellow-Start-1", "yellow-Start-2", "", "", "32", "yellow-Home-1", "28", "", "", "green-Start-1", "green-Start-2"],
                        ["yellow-Start-3", "yellow-Start-4", "", "", "31", "30", "29", "", "", "green-Start-3", "green-Start-4"]
                      ];
    var gameboardDATA = [
                          ["fr1", "fr2", "", "", "avl", "avl", "avl", "", "", "fb1", "fb2"],
                          ["fr3", "fr4", "", "", "avl", "avl", "avl", "", "", "fb3", "fb4"],
                          ["", "", "", "", "avl", "avl", "avl", "", "", "", ""],
                          ["", "", "", "", "avl", "avl", "avl", "", "", "", ""],
                          ["avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl"],
                          ["avl", "avl", "avl", "avl", "avl", "", "avl", "avl", "avl", "avl", "avl"],
                          ["avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl"],
                          ["", "", "", "", "avl", "avl", "avl", "", "", "", ""],
                          ["", "", "", "", "avl", "avl", "avl", "", "", "", ""],
                          ["fy1", "fy2", "", "", "avl", "avl", "avl", "", "", "fg1", "fg2"],
                          ["fy3", "fy4", "", "", "avl", "avl", "avl", "", "", "fg3", "fg4"]
                        ];
    var elementClass;
    var elementID;
    var elementDATA;
    var where = "content";

    for (var i = 0; i < 11; i++) {
     for (var j = 0; j < 11; j++) {
       elementClass = gameboardClass[i][j];
       elementID = gameboardID[i][j];
       elementDATA = gameboardDATA[i][j];
       createBoardElement("content", elementID, elementClass, elementDATA);
     }
    }
    document.getElementById("name1").innerHTML = myName;
}

      function createBoardElement(where, id, classname, data) {
       var myBlock = document.createElement("div");
       if (id != "") {
         myBlock.id = id;
       }
       if (data != "err") {
         if (data != "avl") {

         }

		 myBlock.setAttribute('data-ocupiedBy', "none");
       }
       if (classname == "blu") {
         classname = "blue";
       }
       else if (classname == "gre") {
         classname = "green";
       }
       else if (classname == "yel") {
         classname = "yellow";
       }
       else if (classname == "oth") {
         classname = "other";
       }
       classname = "block "+classname;
       myBlock.className = classname;
       document.getElementById("content").appendChild(myBlock);
     }

    function generateFigures()
    {
        //generateGameboard();
        //generateDice();
        circle=document.createElement("img");
        circle.setAttribute("src", "/client/img/turn.png");
        circle.id = "activePlayer";
        document.getElementById("onturn1").appendChild(circle);

        for(i=1;i<=4;i++)
        {
          if (i == 1) {
            document.getElementById('name'+i).innerHTML=myName;
            document.getElementById("name"+i).style.fontSize='25px';
            document.getElementById("name"+i).style.fontWeight='bold';
          }
          else {
            document.getElementById('name'+i).innerHTML="Player"+i;
            document.getElementById("name"+i).style.fontSize='25px';
            document.getElementById("name"+i).style.fontWeight='bold';
          }

        }

        var color = ['red', 'green', 'blue', 'yellow'];
        var starts = ['1','21','11', '31'];

        for(i=0;i<4;i++){
            for(j=1;j<5;j++){
                var startPawn = document.createElement("img");
                startPawn.setAttribute("src", "/client/img/" + color[i] +".png");
                startPawn.id=(color[i] + '-pawn-'+j);
                startPawn.addEventListener("click",checkMove);
                startPawn.setAttribute("data-moveCounter","1");
                startPawn.setAttribute("data-possition","home");
                startPawn.setAttribute("data-startField",starts[i]);
                document.getElementById(color[i] + "-Start-"+j).appendChild(startPawn);
                document.getElementById(color[i] + '-pawn-'+j).style.cursor="pointer";
            }

        }
    }

    function generateDice()
    {
    document.getElementById("dice").innerHTML="";
    var dice=document.createElement("img");
    dice.setAttribute("src", "/client/img/roll.png");
    dice.style.cursor="pointer";
    dice.addEventListener("click", rollDice);
    document.getElementById("dice").appendChild(dice);
    }

    function rollDice()
    {
      if (numberOfRolls < 1 || turn != iamPlayer) {
        return;
      }

      if (isAllPawnsOnStart() == 0 && playerOnTurnRolls <= 3) {
        playerOnTurnRolls++;
        numberOfRolls++;
        console.log("START");
      }
        if(playerMoved == false){
            return 0;
        }

    var dice = document.createElement("img");
    diceImg = dice;
    var rollNum = Math.floor(Math.random()*6+1);
    globalNum = rollNum;
    console.log(rollNum);
    numberOfRolls--;
    document.getElementById("dice").innerHTML="";
    dice.setAttribute("src", "/client/img/img" + rollNum + ".png");
	   document.getElementById("dice").appendChild(dice);
    dice.addEventListener("click",rollDice);
    playerMoved = false;
    isMovePossible(globalNum);
    }

    function reGenerateDice(){
      //globalNum = 0;
      document.getElementById("dice").setAttribute("src", "/client/img/roll.png");
    }

    function isAllPawnsOnStart()
    {
      var counter = 0;
      var pawnInHome = playerOnTurn;
      var positionOfPawn = "home";
      for (var i = 1; i <= 4; i++) {
        pawnInHome = playerOnTurn+"-pawn-"+i;
        positionOfPawn = document.getElementById(pawnInHome).dataset.possition;
        if (positionOfPawn == "home") {
          counter++;
        }
        else {
          break;
        }
      }
      if (counter == 4) {
        return 0;
      }
      else {
        return 1;
      }
    }

    function isMovePossible(rollValue){
        var found = 0;
        for(i=1;i<5;i++){
            var currentPawn = document.getElementById(playerOnTurn + '-pawn-' + i);
            var currentStarter = document.getElementById(playerOnTurn + '-Start-' + i);
            var moveCounter = parseInt(currentPawn.dataset.movecounter);

            currentPawn.dataset.movecounter = moveCounter + rollValue;

            if(currentPawn.dataset.movecounter > 44 || currentPawn.parentNode == currentStarter){;
                if(rollValue != 6){
                    found++;
                }
            }

                currentPawn.dataset.movecounter -=  rollValue;
        }

         if(found == 4){
             playerMoved = true;
             globalNum = 0;
             onTurn();
         }

    }

    function checkMove()
    {
      if (this.id.includes(playerOnTurn) && this.id.includes(iamPlayerColor)) {
        playerMoved = true;
        var idFigure = this.id.split("-");
        var splitted=document.getElementById(playerOnTurn + '-Start-' + idFigure[2]);
        if(this.parentNode == splitted)
        {
        moveFromHome(this,this.id);
        }
        else if(idFigure[0] == playerOnTurn)
        {
        moveOnBoard(this, this.id, globalNum);
        }
      }
      else {
        return;
      }

    }

    function isPawnsOnStart(testedPawnID)
    {
      var positionOfPawn = "home";
      positionOfPawn = document.getElementById(testedPawnID).dataset.possition;
        if (positionOfPawn == "home") {
          return 0;
        }
        else {
          return 1;
        }
    }

    function canMoveFurther(pawn,rollValue){

        if(pawn.dataset.movecounter > 44){

            pawn.dataset.movecounter -= rollValue;
            //console.log('cant move further');

            if(globalNum!=6){
                globalNum=0;
                onTurn();
            }
            else{
                globalNum=0;
            }
            return false;
         }
         else
            return true;
    }

    function XisMovePossible2(rollValue){
        var found = 0;
        for(i=1;i<5;i++){
            var currentPawn = document.getElementById(playerOnTurn + '-pawn-' + i);
            var currentStarter = document.getElementById(playerOnTurn + '-Start-' + i);
            var moveCounter = parseInt(currentPawn.dataset.movecounter);

            currentPawn.dataset.movecounter = moveCounter + rollValue;
            //console.log(currentPawn);

            if(currentPawn.dataset.movecounter > 44 || currentPawn.parentNode == currentStarter){;
                if(rollValue != 6){
                    found++;
                }
            }

                currentPawn.dataset.movecounter -=  rollValue;
        }

         if(found == 4){
             playerMoved = true;
             globalNum = 0;
             onTurn();
         }

    }

    function moveToHome(pawn, splitPawnId,finalPosition, idToGet){

        //echoMoveToHome(pawn.id, splitPawnId, finalPosition);
        var homeNumber = pawn.dataset.movecounter - 40;
        var homeField = document.getElementById(splitPawnId[0] + '-Home-' + homeNumber);
        if(homeField.dataset.ocupiedby == "none"){
            pawn.parentNode.dataset.ocupiedby='none';
            homeField.appendChild(pawn);
            pawn.parentNode.dataset.ocupiedby=pawn.id;

            if(globalNum!=6){
                globalNum=0;
                onTurn();
            }
            else{
                globalNum=0;
            }

        }
        else{
            pawn.dataset.movecounter -= globalNum;
        }
    }


    function moveOnBoard(pawn, pawnID, rollValue)
    {
        //echoMovePawn(pawn.id, pawnID, rollValue);
        var splitPawnId = pawn.id.split("-");
        var finalPosition = parseInt(pawn.parentNode.id) + parseInt(rollValue);

        if(globalNum == 0){
            return 1;
        }
        if (finalPosition > 40) {
          finalPosition = finalPosition - 40;
        }
        var finalField = document.getElementById(finalPosition);

       var moveCounter = parseInt(pawn.dataset.movecounter);
       pawn.dataset.movecounter = moveCounter + rollValue;

       if(canMoveFurther(pawn,rollValue) == true){
          if(pawn.dataset.movecounter > 40 && pawn.dataset.movecounter < 45){
              moveToHome(pawn, splitPawnId,finalPosition);
          }
          else if(finalField.dataset.ocupiedby == "none"){
              pawn.parentNode.dataset.ocupiedby='none';
              finalField.appendChild(pawn);
              pawn.parentNode.dataset.ocupiedby=pawnID;
              if(globalNum!=6){
                  globalNum=0;
                  diceImg.setAttribute("src", "/client/img/roll.png");
                  onTurn();
              }
              else{
                  globalNum=0;
              }
          }
          else if(finalField.dataset.ocupiedby.includes(playerOnTurn)){
              //console.log('your own player');
              pawn.dataset.movecounter -= rollValue;
              return 0;
          }
          else{
              kickPawn(pawn,finalField);
              if(globalNum!=6){
                  globalNum=0;
                  onTurn();
              }
              else{
                  globalNum=0;
              }
          }

       }

      }

function moveFromHome(fig,figure)
{
  //echoMovePawnFromHome(fig, figure);
    if(globalNum == 6){
        var startingField = document.getElementById(fig.dataset.startfield);
        if(startingField.dataset.ocupiedby != "none"){
            if(startingField.dataset.ocupiedby.includes(playerOnTurn))
          {
            return 0;
          }

            else {
                kickPawn(fig,startingField);
                if(globalNum!=6){
                    globalNum=0;
                    onTurn();
                }
                else{
                    globalNum=0;
                }
            }

        }
        else{
            startingField.appendChild(fig);
            startingField.dataset.ocupiedby = fig.id;
        }
    }

}

    function onTurn(data)
    {
        if(turn==4)
        {
        turn=0;
        }
        turn++;
        console.log('turn:', turn);
        playerOnTurnRolls = 0;
        numberOfRolls = 1;
        reGenerateDice();
        document.getElementById("dice").src = "/client/img/roll.png";
        console.log("regenDICE");
        if (data != 1) {
          updateGameState();
        }
        echoNextPlayer();
        if (numberOfPlayers < turn) {
          onTurn('1');
        }

        if(turn==1)
            {
              circle = document.getElementById("activePlayer");
            document.getElementById("onturn4").innerHTML="";
            document.getElementById("onturn1").appendChild(circle);
            reGenerateDice();
            }
        else if(turn==2){
          circle = document.getElementById("activePlayer");
                document.getElementById("onturn1").innerHTML="";
                document.getElementById("onturn2").appendChild(circle);
                reGenerateDice();
        }
        else if(turn==3){
          circle = document.getElementById("activePlayer");
                document.getElementById("onturn2").innerHTML="";
                document.getElementById("onturn3").appendChild(circle);
                reGenerateDice();
        }
        else{
          circle = document.getElementById("activePlayer");
                document.getElementById("onturn3").innerHTML="";
                document.getElementById("onturn4").appendChild(circle);
                reGenerateDice();
        }
    }

    function kickPawn(pawn,finalField)
    {
        pawn.parentNode.dataset.ocupiedby='none';
        var kickedPlayer = finalField.children[0];
        var parsedKicked = kickedPlayer.id.split("-");
        var kickedHome = document.getElementById(parsedKicked[0]+'-Start-'+parsedKicked[2]);
        kickedHome.appendChild(kickedPlayer);
        kickedPlayer.dataset.movecounter = 1;
        finalField.appendChild(pawn);
        pawn.parentNode.dataset.ocupiedby=pawn.id;
        console.log(kickedPlayer, parsedKicked, kickedHome, finalField);
}

function serverMoveOnBoard(pawn, pawnID, rollValue)
{
  pawn = document.getElementById(pawn);
  console.log(pawn);
  console.log(pawnID);
  console.log(rollValue);
    var splitPawnId = pawn.id.split("-");
    var finalPosition = parseInt(pawn.parentNode.id) + parseInt(rollValue);

    if(globalNum == 0){
        return 1;
    }
    if (finalPosition > 40) {
      finalPosition = finalPosition - 40;
    }
    var finalField = document.getElementById(finalPosition);

   var moveCounter = parseInt(pawn.dataset.movecounter);
   pawn.dataset.movecounter = moveCounter + rollValue;

   if(canMoveFurther2(pawn,rollValue) == true){
      if(pawn.dataset.movecounter > 40 && pawn.dataset.movecounter < 45){
          serverMoveToHome(pawn, splitPawnId,finalPosition);
      }
      else if(finalField.dataset.ocupiedby == "none"){
          pawn.parentNode.dataset.ocupiedby='none';
          finalField.appendChild(pawn);
          pawn.parentNode.dataset.ocupiedby=pawnID;
          if(globalNum!=6){
              globalNum=0;
              diceImg.setAttribute("src", "/client/img/roll.png");
              //onTurn();
          }
          else{
              globalNum=0;
          }
      }
      else if(finalField.dataset.ocupiedby.includes(playerOnTurn)){
          //console.log('your own player');
          pawn.dataset.movecounter -= rollValue;
          return 0;
      }
      else{
          kickPawn(pawn,finalField);
          if(globalNum!=6){
              globalNum=0;
              //onTurn();
          }
          else{
              globalNum=0;
          }
      }

   }

  }

  function serverMoveFromHome(fig,figure)
  {

    console.log(fig);
    console.log(figure);
          var startingField = document.getElementById(fig.dataset.startfield);
          if(startingField.dataset.ocupiedby != "none"){
              if(startingField.dataset.ocupiedby.includes(playerOnTurn))
              return 0;

              else {
                  kickPawn(fig,startingField);
                  if(globalNum!=6){
                      globalNum=0;
                      //onTurn();
                  }
                  else{
                      globalNum=0;
                  }
              }
          }
          else{
              startingField.appendChild(fig);
              startingField.dataset.ocupiedby = fig.id;
          }

  }

  function serverMoveToHome(pawn, splitPawnId,finalPosition){
    pawn = document.getElementById(pawn);
    console.log(pawn);
    console.log(splitPawnId);
    console.log(finalPosition);
      var homeNumber = pawn.dataset.movecounter - 40;
      var homeField = document.getElementById(splitPawnId[0] + '-Home-' + homeNumber);
      if(homeField.dataset.ocupiedby == "none"){
          pawn.parentNode.dataset.ocupiedby='none';
          homeField.appendChild(pawn);
          pawn.parentNode.dataset.ocupiedby=pawn.id;

          if(globalNum!=6){
              globalNum=0;
              //onTurn();
          }
          else{
              globalNum=0;
          }
      }
      else{
          pawn.dataset.movecounter -= globalNum;
      }
  }

  function canMoveFurther2(pawn,rollValue){

      if(pawn.dataset.movecounter > 44){

          pawn.dataset.movecounter -= rollValue;
          //console.log('cant move further');

          if(globalNum!=6){
              globalNum=0;
              return false;
          }
          else{
              globalNum=0;
              return false;
          }

       }
       else
          return true;
  }

  function updateGameState() {
    var color = ['yellow','red', 'blue', 'green'];
    var swapID = "";
    var swapPostitions = "start";
    var swapCounters = "start";
    gameStateCounters = "";
    gameStatePositions = "";
    for (var i = 0; i < 4; i++) {
      for (var j = 1; j <= 4; j++) {
        swapID = color[i]+"-pawn-"+j;
        swapPostitions = document.getElementById(swapID).parentNode.id;
        swapCounters = document.getElementById(swapID).dataset.movecounter;
        gameStatePositions = gameStatePositions + "/" + swapPostitions;
        gameStateCounters = gameStateCounters + "/" + swapCounters;
      }
    }
    echoGameState(gameStatePositions, gameStateCounters);
  }

  function serverUpdateGame(positions, counters){
    var swapPostitions = positions.split("/");
    var swapCounters = counters.split("/");
    var color = ['yellow','red', 'blue', 'green'];
    var swapID = "";
    var swapFigure = "";
    var count = 1;

    for (var i = 1; i <= 40; i++) {
      document.getElementById(i).dataset.ocupiedby = "none";
    }

    for (var i = 0; i < 4; i++) {
      for (var j = 1; j <= 4; j++) {
        swapID = color[i]+"-pawn-"+j;
        swapFigure = document.getElementById(swapID);
        swapFigure.dataset.movecounter = swapCounters[count];
        if (swapPostitions[count].includes("home")) {

        }
        else {
            document.getElementById(swapPostitions[count]).dataset.ocupiedby = swapID;
        }
        document.getElementById(swapPostitions[count]).appendChild(swapFigure);
        count++;
      }
    }
  }
