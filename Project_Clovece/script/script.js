var globalNum;
var turn=1;
var playerOnTurn = "yellow";
var playerMoved = true;

function generateGameboard()
{
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
                        ["red-Start-1", "red-Start-2", "", "", "9  ", "10 ", "11 ", "", "", "blue-Start-1", "blue-Start-2"],
                        ["red-Start-3", "red-Start-4", "", "", "8  ", "blue-Home-1", "12 ", "", "", "blue-Start-3", "blue-Start-4"],
                        ["name2", "", "onturn2", "", "7  ", "blue-Home-2", "13 ", "", "onturn3", "name3", ""],
                        ["", "", "", "", "6  ", "blue-Home-3", "14 ", "", "", "", ""],
                        ["1  ", "2  ", "3  ", "4  ", "5  ", "blue-Home-4", "15 ", "16 ", "17 ", "18 ", "19 "],
                        ["40 ", "red-Home-1", "red-Home-2", "red-Home-3", "red-Home-4", "dice", "green-Home-4", "green-Home-3", "green-Home-2", "green-Home-1", "20 "],
                        ["39 ", "38 ", "37 ", "36 ", "35 ", "yellow-Home-4", "25 ", "24 ", "23 ", "22 ", "21 "],
                        ["", "", "", "", "34 ", "yellow-Home-3", "26 ", "", "", "", ""],
                        ["name1", "", "onturn1", "", "33 ", "yellow-Home-2", "27 ", "", "onturn4", "name4", ""],
                        ["yellow-Start-1", "yellow-Start-2", "", "", "32 ", "yellow-Home-1", "28 ", "", "", "green-Start-1", "green-Start-2"],
                        ["yellow-Start-3", "yellow-Start-4", "", "", "31 ", "30 ", "29 ", "", "", "green-Start-3", "green-Start-4"]
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
    generateGameboard();
    generateDice();
        var i;
        var circle=document.createElement("img");
        circle.setAttribute("src", "img/turn.png");
        document.getElementById("onturn1").appendChild(circle);
        for(i=1;i<=4;i++)
        {
            document.getElementById('name'+i).innerHTML="Player"+i;
            document.getElementById("name"+i).style.fontSize='25px';
            document.getElementById("name"+i).style.fontWeight='bold';
        }
         
    for(i=1;i<=4;i++)
        {
        var startRed=document.createElement("img");
        startRed.setAttribute("src", "img/red.png");
        startRed.id=('red-pawn-'+i);
        startRed.addEventListener("click",checkMove);
        startRed.setAttribute("data-moveCounter","1");
        document.getElementById("red-Start-"+i).appendChild(startRed);
        }

    for(i=1;i<=4;i++)
        {
        var startGreen=document.createElement("img");
        startGreen.setAttribute("src", "img/green.png");
        startGreen.id=('green-pawn-'+i);
        startGreen.addEventListener("click",checkMove);
        startGreen.setAttribute("data-moveCounter","1");
        document.getElementById("green-Start-"+i).appendChild(startGreen);
        }

    for(i=1;i<=4;i++)
        {
        var startBlue=document.createElement("img");
        startBlue.setAttribute("src", "img/blue.png");
        startBlue.id=('blue-pawn-'+i);
        startBlue.addEventListener("click",checkMove);
        startBlue.setAttribute("data-moveCounter","1");
        document.getElementById("blue-Start-"+i).appendChild(startBlue);
        }

    for(i=1;i<=4;i++)
        {
        var startYellow=document.createElement("img");
        startYellow.setAttribute("src", "img/yellow.png");
        startYellow.id=('yellow-pawn-'+i);
        startYellow.addEventListener("click",checkMove);
        startYellow.setAttribute("data-moveCounter","1");
        document.getElementById("yellow-Start-"+i).appendChild(startYellow);        
        }
        for(i=1;i<=4;i++)
            {
            document.getElementById('yellow-pawn-'+i).style.cursor="pointer";

            }
         for(i=1;i<=4;i++)
            {
            document.getElementById('green-pawn-'+i).style.cursor="pointer";

            }
         for(i=1;i<=4;i++)
            {
            document.getElementById('blue-pawn-'+i).style.cursor="pointer";

            }
         for(i=1;i<=4;i++)
            {
            document.getElementById('red-pawn-'+i).style.cursor="pointer";

            }
    }

    function generateDice()
    {
    document.getElementById("dice").innerHTML="";
    var dice=document.createElement("img");
    dice.setAttribute("src", "img/roll.png");
    dice.style.cursor="pointer";
    dice.addEventListener("click", rollDice);
    document.getElementById("dice").appendChild(dice);
    }

    function rollDice()
    {
        if(playerMoved == false){
            return 0;
        }
    var dice=document.createElement("img");
    dice.style.cursor="pointer";
    var rollNum=Math.floor(Math.random()*6+1);
    globalNum=rollNum;
    console.log(rollNum);
    if(parseInt(rollNum)==1)
    	{
    	document.getElementById("dice").innerHTML="";
    	dice.setAttribute("src", "img/img1.png");
    	document.getElementById("dice").appendChild(dice);
    	}

    else if(parseInt(rollNum)==2)
    	{
    	document.getElementById("dice").innerHTML="";
    	dice.removeAttribute("src","img/roll.png");
    	dice.setAttribute("src", "img/img2.png");
    	document.getElementById("dice").appendChild(dice);
    	}

    else if(parseInt(rollNum)==3)
    	{
    	document.getElementById("dice").innerHTML="";
    	dice.removeAttribute("src","img/roll.png");
    	dice.setAttribute("src", "img/img3.png");
    	document.getElementById("dice").appendChild(dice);
    	}

    else if(parseInt(rollNum)==4)
    	{
    	document.getElementById("dice").innerHTML="";
    	dice.removeAttribute("src","img/roll.png");
    	dice.setAttribute("src", "img/img4.png");
    	document.getElementById("dice").appendChild(dice);
    	}

    else if(parseInt(rollNum)==5)
    	{
    	document.getElementById("dice").innerHTML="";
    	dice.removeAttribute("src","img/roll.png");
    	dice.setAttribute("src", "img/img5.png");
    	document.getElementById("dice").appendChild(dice);
    	}

    else if(parseInt(rollNum)==6)
    	{
    	document.getElementById("dice").innerHTML="";
    	dice.removeAttribute("src","img/roll.png");
    	dice.setAttribute("src", "img/img6.png");
    	document.getElementById("dice").appendChild(dice);
    	}
        dice.addEventListener("click",rollDice);
        playerMoved = false;
        isMovePossible(globalNum);
    } 

    function isMovePossible(rollValue){
        var found = 0;
        for(i=1;i<5;i++){
            var currentPawn = document.getElementById(playerOnTurn + '-pawn-' + i);
            var currentStarter = document.getElementById(playerOnTurn + '-Start-' + i);
            var moveCounter = parseInt(currentPawn.dataset.movecounter);
            
            currentPawn.dataset.movecounter = moveCounter + rollValue;       
            console.log(currentPawn);

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
        playerMoved = true;
        console.log('rolled'+globalNum)
        var idFigure = this.id.split("-");
        // console.log(idFigure,playerOnTurn,turn);
        var splitted=document.getElementById(playerOnTurn + '-Start-' + idFigure[2]);
        // console.log(idFigure,this.parentNode,splitted);
        if(this.parentNode == splitted)
        {
        moveFromHome(this,this.id);
        }
        else if(idFigure[0] == playerOnTurn)
        {
        moveOnBoard(this, this.id, globalNum); 
        }
    
    }

function moveOnBoard(pawn, pawnID, rollValue) {

    var splitPawnId = pawn.id.split("-");
    // console.log(splitPawnId[0]);

  //console.log(pawn);
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
//    console.log(pawn,homeField);
    if(globalNum!=6)
        {
        globalNum=0;
        onTurn();
        }
    else
    {
    globalNum=0;
    }
}

else if(pawn.dataset.movecounter > 44){
    pawn.dataset.movecounter -= rollValue;
    if(globalNum!=6)
        {
        globalNum=0;
        onTurn();
        }
    else
    {
    globalNum=0;
    }
    console.log(pawn,homeField);
}

else{
    
    var finalField = document.getElementById(finalPosition); 
    if(finalField.dataset.ocupiedby != "none" )
    {
    console.log('niekto tam je');
    }
    else
    {
    console.log("nikto tam nie je");
    }
    pawn.parentNode.dataset.ocupiedby='none';
    document.getElementById(finalPosition).appendChild(pawn);
    pawn.parentNode.dataset.ocupiedby=pawnID;
    console.log(pawn,homeField);
    if(globalNum!=6)
        {
        globalNum=0;
        onTurn();
        }
    else
    {
    globalNum=0;
    }
}
 
}

    function moveFromHome(fig,figure)
    {
        // console.log('rolled'+globalNum);
        if(globalNum==6 && turn==1 && figure.includes("yellow"))
        {
        var firstField =  document.getElementById("31 ");  
        firstField.appendChild(fig);
        firstField.dataset.ocupiedby = figure;
        globalNum=0;
        }

        if(globalNum==6 && turn==2 && figure.includes("red"))
        { 
        var firstField =  document.getElementById("1  "); 
        firstField.appendChild(fig);
        firstField.dataset.ocupiedby = figure;
        globalNum=0;
        }

        if(globalNum==6 && turn==3 && figure.includes("blue"))
        {   
        var firstField =  document.getElementById("11 "); 
        firstField.appendChild(fig);
        firstField.dataset.ocupiedby = figure;
        globalNum=0;
        }

        if(globalNum==6 && turn==4 && figure.includes("green"))
        {
        var firstField =  document.getElementById("21 "); 
        firstField.appendChild(fig);
        firstField.dataset.ocupiedby = figure;
        globalNum=0;
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
        
        if(turn==1)
            {
            document.getElementById("onturn4").innerHTML="";
            var circle=document.createElement("img");
            circle.setAttribute("src", "img/turn.png");
            document.getElementById("onturn1").appendChild(circle);   
            }
        else if(turn==2){
                document.getElementById("onturn1").innerHTML="";
                var circle=document.createElement("img");
                circle.setAttribute("src", "img/turn.png");
                document.getElementById("onturn2").appendChild(circle);
        }
        else if(turn==3){
                document.getElementById("onturn2").innerHTML="";
                var circle=document.createElement("img");
                circle.setAttribute("src", "img/turn.png");
                document.getElementById("onturn3").appendChild(circle);

        }
        else{
                document.getElementById("onturn3").innerHTML="";
                var circle=document.createElement("img");
                circle.setAttribute("src", "img/turn.png");
                document.getElementById("onturn4").appendChild(circle);
        }
    }

    function kickPawn()
    {

    }