var template = require('../views/gameboard1');  
var gameData = require('../model/defaulGameData');
var database = require("../data/sqlite.setup.core");

Promise.prototype.always = function(onResolveOrReject) {
  return this.then(onResolveOrReject,
    function(reason) {
      onResolveOrReject(reason);
      throw reason;
    });
};

function getMenu() {
  return [
    "<ul>",
      "<li>Menu item 1</li>",
      "<li>Menu item 2</li>",
    "</ul>"]
    .join("");
}

exports.get = function(req, res) {  
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  
  var title = "Gameboard 1";
  var pagetitle = "Game of Clovece";
  var content = "";
  var misc = "";

  var paramsForFunc = [{name: "id", type: "INT"}, {name: "dt", type: "TEXT"}];
  var tableName = "users";

  database.getData(tableName, paramsForFunc).then(function(response) {
    response.forEach(function(element) {
        content += element.id + " - " + element.dt + "<br/>";
    });
  }).catch(function(error) {
    content = error;
  }).always(function() {
    res.write(template.build(title, pagetitle, content, getMenu()));
    res.end();
  });
};