var globalNum;
var turn=1;

var playerOnTurn = "yellow";
// generateMoveSet();

function generateGameboard()
{
  var board='url(/client/img/board.png)';
  document.getElementById('content').style.backgroundImage=board;
  document.getElementById('content').style.boxShadow='13px 13px 27px 7px rgba(0,0,0,0.75)';
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
                        ["red-Start-1","red-Start-2","","","9","10","11","","","blue-Start-1","blue-Start-2"],
                        ["red-Start-3","red-Start-4","","","8","blue-Home-1","12","","","blue-Start-3","blue-Start-4"],
                        ["","","","","7","blue-Home-2","13","","","",""],
                        ["","","","","6","blue-Home-3","14","","","",""],
                        ["1","2","3","4","5","blue-Home-4","15","16","17","18","19"],
                        ["40","red-Home-1","red-Home-2","red-Home-3","red-Home-4","dice","green-Home-4","green-Home-3","green-Home-2","green-Home-1","20"],
                        ["39","38","37","36","35","yellow-Home-4","25","24","23","22","21"],
                        ["","","","","34","yellow-Home-3","26","","","",""],
                        ["","","","","33","yellow-Home-2","27","","","",""],
                        ["yellow-Start-1","yellow-Start-2","","","32","yellow-Home-1","28","","","green-Start-1","green-Start-2"],
                        ["yellow-Start-3","yellow-Start-4","","","31","30","29","","","green-Start-3","green-Start-4"]
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
}

      function createBoardElement(where, id, classname, data) {
       var myBlock = document.createElement("div");
       if (id != "") {
         myBlock.id = id;
       }
       if (data != "err") {
         if (data != "avl") {

         }
         myBlock.setAttribute('data', "availity: 'yes'");
		     myBlock.setAttribute('data',"ocupiedBy: 'none'");
       }
       classname = "block "+classname;
       myBlock.className = classname;
       document.getElementById("content").appendChild(myBlock);
     }

     function generatePlayersNames()
     {

     }

    function generateFigures()
    {
      var i = 0;
      var j = 0;
      var startPawn=document.createElement("img");
        if (iamPlayer == "spectator" || iamPlayer > 4) {

        }
        else {
          startPawn.addEventListener("click",checkMove);
        }
        startPawn.setAttribute("data-moveCounter","1");
        startPawn.setAttribute("data-possition","home");
      var pawnColor = ["yellow", "red", "blue", "green"];
      var pawnImg = "/client/img/";
      for (var i = 0; i < 4; i++) {
        pawnImg = "/client/img/"+pawnColor[i]+".png";
        for (var j = 1; j <= 4; j++) {
          startPawn.setAttribute("src", pawnImg);
          startPawn.id=(pawnColor[i]+"-pawn-"+j);
          document.getElementById(pawnColor[i]+"-Start-"+j).appendChild(startPawn);
        }
      }
    }

    function generateDice()
    {
      document.getElementById("dice").innerHTML="";
      var dice=document.createElement("img");
      dice.setAttribute("src", "/client/img/roll.png");
      dice.addEventListener("click", rollDice);
      document.getElementById("dice").appendChild(dice);
    }

    function reGenerateDice() {
      globalNum = 0;
      document.getElementById("dice").setAttribute("src", "/client/img/roll.png");
    }

    function rollDice()
    {
      if (numberOfRolls > 0 && playerOnTurn == iamPlayer) {
        numberOfRolls--;
        var rollNum=Math.floor(Math.random()*6+1);
        globalNum=rollNum;
        console.log(rollNum);
        if (rollNum == 6) {
          numberOfRolls++;
        }
        document.getElementById("dice").setAttribute("src", "/client/img/img"+rollNum+".png");
      }
      else {
      }
    }

    function checkMove()
    {
      var count=0;
      if(this.id.includes(playerOnTurn)  && turn == iamPlayer)
      {

      }


    /*
    for(var i=1;i<=4;i++)
    {
        if(document.getElementById('yellow-pawn-'+i).parentNode==document.getElementById('yellow-Start-'+i))
        {
        count++;
        }
        else
        {
        moveOnBoard(this, this.id, globalNum);
        }
    }
    if(count==4 || globalNum == 6)
    {
    moveFromHome(this,this.id);
    }
    */
}

function moveOnBoard(pawn, pawnID, rollValue) {

    var splitPawnId = pawn.id.split("-");
    console.log(splitPawnId[0]);

  console.log(pawn);
    if(globalNum == 0){
        return 1;
    }

  var finalPosition = parseInt(pawn.parentNode.id) + parseInt(rollValue);
  if (finalPosition > 40) {
    finalPosition = finalPosition - 40;
  }
  if (finalPosition < 10) {
    finalPosition = finalPosition + "  ";
  }
  else {
    finalPosition = finalPosition + " ";
  }

 // adding to movecounter
 var moveCounter = parseInt(pawn.dataset.movecounter);
 pawn.dataset.movecounter = moveCounter + rollValue;

if(pawn.dataset.movecounter > 40 && pawn.dataset.movecounter < 45){
    var i = pawn.dataset.movecounter - 40;
    var homeField = document.getElementById(splitPawnId[0] + '-Home-' + i);
   homeField.appendChild(pawn);
   console.log(pawn,homeField);

   globalNum = 0;
   onTurn();
}

else if(pawn.dataset.movecounter > 44){
    pawn.dataset.movecounter -= rollValue;
    globalNum = 0;
    onTurn();
    console.log(pawn,homeField);
}

else{
    document.getElementById(finalPosition).appendChild(pawn);
    globalNum = 0;
    onTurn();
    console.log(pawn,homeField);

}

}

    function moveFromHome(fig,figure)
    {
        if((parseInt(globalNum)==6)&&(parseInt(turn)==1)&&(figure.includes("yellow")))
        {
        document.getElementById("31").appendChild(fig);
        globalNum=0;
        // onTurn();
        }

        if((parseInt(globalNum)==6)&&(parseInt(turn)==2)&&(figure.includes("red")))
        {
        document.getElementById("1").appendChild(fig);
        globalNum=0;
        // onTurn();
        }

        if((parseInt(globalNum)==6)&&(parseInt(turn)==3)&&(figure.includes("blue")))
        {
        document.getElementById("11").appendChild(fig);
        globalNum=0;
        // onTurn();
        }

        if((parseInt(globalNum)==6)&&(parseInt(turn)==4)&&(figure.includes("green")))
        {
        document.getElementById("21").appendChild(fig);
        globalNum=0;
        // onTurn();
        }
    }

    function onTurn()
    {
        if(turn==4)
        {
        turn=0;
        }
        turn++;
        if (turn == 1) {
          playerOnTurn = "yellow";
        }
        else if (turn == 2) {
          playerOnTurn = "red";
        }
        else if (turn == 3) {
          playerOnTurn = "blue";
        }
        else {
          playerOnTurn = "green";
        }
        console.log('turn:', turn);
    }

    function kickPawn()
    {

    }
