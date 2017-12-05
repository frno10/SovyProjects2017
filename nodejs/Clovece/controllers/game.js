var template = require('../views/gameboard1');  
var gameData = require('../model/defaulGameData');  

function getMenu() {
  return [
    "<ul>",
      "<li>Menu item 1</li>",
      "<li>Menu item 2</li>",
    "</ul>"]
    .join("");
}

exports.get = function(req, res) {  
  //var gameData = gameData.defaultGameData();
  
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  
  var title = "Gameboard 1";
  var pagetitle = "Game of Clovece";
  var content = "";
  var misc = "";

  res.write(template.build(title, pagetitle, content, getMenu()));
  res.end();
};