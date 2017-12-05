function generateGameboard()
{
    var gameboardClass = [
                           ["red", "red", "none", "none", "other", "other", "blue", "none", "none", "blue", "blue"],
                           ["red", "red", "none", "none", "other", "blue", "other", "none", "none", "blue", "blue"],
                           ["none", "none", "none", "none", "other", "blue", "other", "none", "none", "none", "none"],
                           ["none", "none", "none", "none", "other", "blue", "other", "none", "none", "none", "none"],
                           ["red", "other", "other", "other", "other", "blue", "other", "other", "other", "other", "other"],
                           ["other", "red", "red", "red", "red", "none", "green", "green", "green", "green", "other"],
                           ["other", "other", "other", "other", "other", "yellow", "other", "other", "other", "other", "green"],
                           ["none", "none", "none", "none", "other", "yellow", "other", "none", "none", "none", "none"],
                           ["none", "none", "none", "none", "other", "yellow", "other", "none", "none", "none", "none"],
                           ["yellow", "yellow", "none", "none", "other", "yellow", "other", "none", "none", "green", "green"],
                           ["yellow", "yellow", "none", "none", "yellow", "other", "other", "none", "none", "green", "green"]
                         ];
    var gameboardID = [
                        ["redStart1", "redStart2", "", "", "9  ", "10 ", "11 ", "", "", "blueStart1", "blueStart2"],
                        ["redStart3", "redStart4", "", "", "8  ", "blueHome1", "12 ", "", "", "blueStart3", "blueStart4"],
                        ["", "", "", "", "7  ", "blueHome2", "13 ", "", "", "", ""],
                        ["", "", "", "", "6  ", "blueHome3", "14 ", "", "", "", ""],
                        ["1  ", "2  ", "3  ", "4  ", "5  ", "blueHome4", "15 ", "16 ", "17 ", "18 ", "19 "],
                        ["40 ", "redHome1", "redHome2", "redHome3", "redHome4", "", "greenHome4", "greenHome3", "greenHome2", "greenHome1", "20 "],
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
        myLogin.style.height='200px';
        myLogin.style.background='lightblue';  
        document.getElementById('content').style.margin='0 auto';     
        document.getElementById('content').appendChild(myLogin);

        var label=document.createElement('label');
        label.htmlFor="text";
        label.innerHTML="Your name: ";
        document.getElementById('login').appendChild(label);

        var input=document.createElement("INPUT");
        input.type='text';
        document.getElementById('login').appendChild(input);

        var eol=document.createElement('br');
        document.getElementById('login').appendChild(eol);

        var button=document.createElement('button');
        button.style.width = "50px";
        button.style.height = "25px";
        button.innerHTML='OK';
        document.getElementById('login').appendChild(button);
     }