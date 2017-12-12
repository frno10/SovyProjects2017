var globalNum;
var turn=1;

var playerOnTurn = "yellow";
// generateMoveSet();

function generateGameboard()
{
    var board='url(img/board.png)';
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
         myBlock.setAttribute('data', "availity: 'yes'");
		 myBlock.setAttribute('data',"ocupiedBy: 'none'");
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

    /*
     function setLogin()
     {
        var myLogin;
        myLogin=document.createElement('div');
        myLogin.id='login';
        myLogin.classname='csslogin';
        myLogin.style.width='200px';
        myLogin.style.height='160px';
        myLogin.style.borderRadius='30px';
        myLogin.style.background="lightgrey"
        document.getElementById('content').style.margin='0 auto';
        document.getElementById('content').appendChild(myLogin);

        var label=document.createElement('label');
        label.htmlFor="text";
        label.innerHTML="Your name: ";
        document.getElementById('login').appendChild(label);

        var input=document.createElement('input');
        input.type='text';
        input.id="inputField";
        document.getElementById('login').appendChild(input);


        var eol=document.createElement('br');
        document.getElementById('login').appendChild(eol);
        var eol2=document.createElement('br');
        document.getElementById('login').appendChild(eol2);
        var button=document.createElement('button');
        button.className="btn btn-md btn-dark";
        button.style.width="80px";
        button.innerHTML='OK';
        document.getElementById('login').appendChild(button);
        button.addEventListener("click", clearLogin);
     }

    function clearLogin()
    {
        var input = document.getElementById("inputField");
        if(input.value=="")
         {
         alert("Please, enter the name!");
         }

         else
         {
         document.getElementById('login').remove();
         generateGameboard();
         generateFigures();
         generateDice();
         }
    }
    */

    function generateFigures()
    {
    generateGameboard();
    generateDice();
         var i;
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
    dice.addEventListener("click", rollDice);
    document.getElementById("dice").appendChild(dice);
    }

    function rollDice()
    {
    var dice=document.createElement("img");
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
    } 

    function checkMove()
    {
        var count=0;
        if(this.id.includes('yellow')  && turn == 1)
        {
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
        if(count==4)
        {

        moveFromHome(this,this.id);
        }
    }
        if(this.id.includes('red')  && turn == 2)
        {
        for(var i=1;i<=4;i++)
        {
            if(document.getElementById('red-pawn-'+i).parentNode==document.getElementById('red-Start-'+i))
            {
            count++;
            }
            else
            {
            moveOnBoard(this, this.id, globalNum);
            }
        }
        if(count==4)
        {
        moveFromHome(this,this.id);
        }
    }
        if(this.id.includes('blue')  && turn == 3)
        {
        for(var i=1;i<=4;i++)
        {
            if(document.getElementById('blue-pawn-'+i).parentNode==document.getElementById('blue-Start-'+i))
            {
            count++;
            }
            else
            {
            moveOnBoard(this, this.id, globalNum);
            }
        }
        if(count==4)
        {
        moveFromHome(this,this.id);
        }
    }
        if(this.id.includes('green') && turn == 4)
        {
        for(var i=1;i<=4;i++)
        {
            if(document.getElementById('green-pawn-'+i).parentNode==document.getElementById('green-Start-'+i))
            {
            count++;
            }
            else
            {
            moveOnBoard(this, this.id, globalNum);
            }
        }
        if(count==4)
        {
        moveFromHome(this,this.id);
        }
    }
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
        document.getElementById("31 ").appendChild(fig);
        globalNum=0;
        // onTurn();
        }

        if((parseInt(globalNum)==6)&&(parseInt(turn)==2)&&(figure.includes("red")))
        {
        document.getElementById("1  ").appendChild(fig);
        globalNum=0;
        // onTurn();
        }

        if((parseInt(globalNum)==6)&&(parseInt(turn)==3)&&(figure.includes("blue")))
        {
        document.getElementById("11 ").appendChild(fig);
        globalNum=0;
        // onTurn();
        }

        if((parseInt(globalNum)==6)&&(parseInt(turn)==4)&&(figure.includes("green")))
        {
        document.getElementById("21 ").appendChild(fig);
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
        if(turn==1)
            {
                //document.getElementById("onturn4").innerHTML="";
                var circle=document.createElement("img");
                circle.setAttribute("src", "img/turn.png");
                document.getElementById("onturn1").appendChild(circle);   
            }
        else if(turn==2){
                document.getElementById("onturn1").innerHTML="";
                var circle=document.createElement("img");
                circle.setAttribute("src", "img/turn.png");
                document.getElementById("onturn2").appendChild(circle);
        }else if(turn==3){
                document.getElementById("onturn2").innerHTML="";
                var circle=document.createElement("img");
                circle.setAttribute("src", "img/turn.png");
                document.getElementById("onturn3").appendChild(circle);

        }else{
                document.getElementById("onturn3").innerHTML="";
                var circle=document.createElement("img");
                circle.setAttribute("src", "img/turn.png");
                document.getElementById("onturn4").appendChild(circle);

        }
            
        console.log('turn:', turn);
    }

    function kickPawn()
    {

    }
