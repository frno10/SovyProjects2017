var defaultGameData = function() {  
    var date = new Date();
    var objJson = {
      "name" : "Classic Dashboard 1",
      "dateUTC" : date.toUTCString(),
      "count" : 4,
      "positions" : 48,
      "players" : [{
        "name": "Player1",
        "startPosition" : 1
      }, {
        "name": "Player2",
        "startPosition" : 13 
      }, {
        "name": "Player3",
        "startPosition" : 25
      }, {
        "name": "Player4",
        "startPosition" : 37
      }]
    };
    return objJson;
  };
  exports.defaultGameData = defaultGameData;