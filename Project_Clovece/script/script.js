var globalNum;
var turn=1;
function generateGameboard()
{
    var board='url(img/board.png)';
    document.getElementById('content').style.backgroundImage=board;
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
                        ["redStart1", "redStart2", "", "", "9  ", "10 ", "11 ", "", "", "blueStart1", "blueStart2"],
                        ["redStart3", "redStart4", "", "", "8  ", "blueHome1", "12 ", "", "", "blueStart3", "blueStart4"],
                        ["", "", "", "", "7  ", "blueHome2", "13 ", "", "", "", ""],
                        ["", "", "", "", "6  ", "blueHome3", "14 ", "", "", "", ""],
                        ["1  ", "2  ", "3  ", "4  ", "5  ", "blueHome4", "15 ", "16 ", "17 ", "18 ", "19 "],
                        ["40 ", "redHome1", "redHome2", "redHome3", "redHome4", "dice", "greenHome4", "greenHome3", "greenHome2", "greenHome1", "20 "],
                        ["39 ", "38 ", "37 ", "36 ", "35 ", "yellowHome4", "25 ", "24 ", "23 ", "22 ", "21 "],
                        ["", "", "", "", "34 ", "yellowHome3", "26 ", "", "", "", ""],
                        ["", "", "", "", "33 ", "yellowHome2", "27 ", "", "", "", ""],
                        ["yellowStart1", "yellowStart2", "", "", "32 ", "yellowHome1", "28 ", "", "", "greenStart1", "greenStart2"],
                        ["yellowStart3", "yellowStart4", "", "", "31 ", "30 ", "29 ", "", "", "greenStart3", "greenStart4"]
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
         startGame();
         generateDice();
         }
    }

    function startGame()
    {
    var i;
    for(i=1;i<=4;i++)
        {
        var startRed=document.createElement("img");
        startRed.setAttribute("src", "img/red.png");
        startRed.id=('redpawn'+i);
        startRed.addEventListener("click",action);
        document.getElementById("redStart"+i).appendChild(startRed);
        }
        
    for(i=1;i<=4;i++)
        {
        var startGreen=document.createElement("img");
        startGreen.setAttribute("src", "img/green.png");
        startGreen.id=('greenpawn'+i);
        startGreen.addEventListener("click",action);
        document.getElementById("greenStart"+i).appendChild(startGreen);
        }
        
    for(i=1;i<=4;i++)
        {
        var startBlue=document.createElement("img");
        startBlue.setAttribute("src", "img/blue.png");
        startBlue.id=('bluepawn'+i);
        startBlue.addEventListener("click",action);
        document.getElementById("blueStart"+i).appendChild(startBlue);
        }
        
    for(i=1;i<=4;i++)
        {
        var startYellow=document.createElement("img");
        startYellow.setAttribute("src", "img/yellow.png");
        startYellow.id=('yellowpawn'+i);
        startYellow.addEventListener("click",action);
        document.getElementById("yellowStart"+i).appendChild(startYellow);
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

    function action()
    {
            if(((parseInt(globalNum)==6)&&(parseInt(turn)==1))&&((this.parentNode)==document.getElementById('yellowStart1')||(this.parentNode)==document.getElementById('yellowStart2')||(this.parentNode)==document.getElementById('yellowStart3')||(this.parentNode)==document.getElementById('yellowStart4')))
            {
            document.getElementById("31 ").appendChild(this);
            nextPlayer();
            }
        
            else if(((parseInt(globalNum)==6)&&(parseInt(turn)==2))&&((this.parentNode)==document.getElementById('redStart1')||(this.parentNode)==document.getElementById('redStart2')||(this.parentNode)==document.getElementById('redStart3')||(this.parentNode)==document.getElementById('redStart4')))
            {
            document.getElementById("1  ").appendChild(this);
            nextPlayer();
            }
        
            
            else if(((parseInt(globalNum)==6)&&(parseInt(turn)==3))&&((this.parentNode)==document.getElementById('blueStart1')||(this.parentNode)==document.getElementById('blueStart2')||(this.parentNode)==document.getElementById('blueStart3')||(this.parentNode)==document.getElementById('blueStart4')))
            {
            document.getElementById("11 ").appendChild(this);
            nextPlayer();
            }
        
            else if(((parseInt(globalNum)==6)&&(parseInt(turn)==4))&&((this.parentNode)==document.getElementById('greenStart1')||(this.parentNode)==document.getElementById('greenStart2')||(this.parentNode)==document.getElementById('greenStart3')||(this.parentNode)==document.getElementById('greenStart4')))
            {
            document.getElementById("21 ").appendChild(this);
            nextPlayer();
            }
    } 

    function nextPlayer()
    {
        if(turn==4)
        {
        turn=0;
        }
        turn++;
    }

    function fromHome()
    {
    
    }