function start()
{
    var gameboardClass = [
                           ["red", "red", "non", "non", "oth", "oth", "blu", "non", "non", "blu", "blu"],
                           ["red", "red", "non", "non", "oth", "blu", "oth", "non", "non", "blu", "blu"],
                           ["non", "non", "non", "non", "oth", "blu", "oth", "non", "non", "non", "non"],
                           ["non", "non", "non", "non", "oth", "blu", "oth", "non", "non", "non", "non"],
                           ["red", "oth", "oth", "oth", "oth", "blu", "oth", "oth", "oth", "oth", "oth"],
                           ["oth", "red", "red", "red", "red", "non", "gre", "gre", "gre", "gre", "oth"],
                           ["oth", "oth", "oth", "oth", "oth", "yel", "oth", "oth", "oth", "oth", "gre"],
                           ["non", "non", "non", "non", "oth", "yel", "oth", "non", "non", "non", "non"],
                           ["non", "non", "non", "non", "oth", "yel", "oth", "non", "non", "non", "non"],
                           ["yel", "yel", "non", "non", "oth", "yel", "oth", "non", "non", "gre", "gre"],
                           ["yel", "yel", "non", "non", "yel", "oth", "oth", "non", "non", "gre", "gre"]
                         ];
    var gameboardID = [
                        ["rs1", "rs2", "err", "err", "9  ", "10 ", "11 ", "err", "err", "bs1", "bs2"],
                        ["rs3", "rs4", "err", "err", "8  ", "bh1", "12 ", "err", "err", "bs3", "bs4"],
                        ["err", "err", "err", "err", "7  ", "bh2", "13 ", "err", "err", "err", "err"],
                        ["err", "err", "err", "err", "6  ", "bh3", "14 ", "err", "err", "err", "err"],
                        ["1  ", "2  ", "3  ", "4  ", "5  ", "bh4", "15 ", "16 ", "17 ", "18 ", "19 "],
                        ["40 ", "rh1", "rh2", "rh3", "rh4", "err", "gh4", "gh3", "gh2", "gh1", "20 "],
                        ["39 ", "38 ", "37 ", "36 ", "35 ", "yh4", "25 ", "24 ", "23 ", "22 ", "21 "],
                        ["err", "err", "err", "err", "34 ", "yh3", "26 ", "err", "err", "err", "err"],
                        ["err", "err", "err", "err", "33 ", "yh2", "27 ", "err", "err", "err", "err"],
                        ["ys1", "ys2", "err", "err", "32 ", "yh1", "28 ", "err", "err", "gs1", "gs2"],
                        ["ys3", "ys4", "err", "err", "31 ", "30 ", "29 ", "err", "err", "gs3", "gs4"]
                      ];
    var gameboardDATA = [
                          ["fr1", "fr2", "err", "err", "avl", "avl", "avl", "err", "err", "fb1", "fb2"],
                          ["fr3", "fr4", "err", "err", "avl", "avl", "avl", "err", "err", "fb3", "fb4"],
                          ["err", "err", "err", "err", "avl", "avl", "avl", "err", "err", "err", "err"],
                          ["err", "err", "err", "err", "avl", "avl", "avl", "err", "err", "err", "err"],
                          ["avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl"],
                          ["avl", "avl", "avl", "avl", "avl", "err", "avl", "avl", "avl", "avl", "avl"],
                          ["avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl"],
                          ["err", "err", "err", "err", "avl", "avl", "avl", "err", "err", "err", "err"],
                          ["err", "err", "err", "err", "avl", "avl", "avl", "err", "err", "err", "err"],
                          ["fy1", "fy2", "err", "err", "avl", "avl", "avl", "err", "err", "fg1", "fg2"],
                          ["fy3", "fy4", "err", "err", "avl", "avl", "avl", "err", "err", "fg3", "fg4"]
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
       CreateBoard("content", elementID, elementClass, elementDATA);
     }
    }
}

      function CreateBoard(where, id, classname, data) {
       var myBlock = document.createElement("div");
       if (id != "non") {
         myBlock.id = id;
       }
       if (data != "err") {
         if (data != "avl") {

          //myBlock.setAttribute('data', "icon: 'base2.gif'");
         }
         myBlock.setAttribute('data', "availity: 'yes', ocupiedBy: 'non'");
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
