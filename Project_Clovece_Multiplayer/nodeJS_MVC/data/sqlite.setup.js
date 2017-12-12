// https://github.com/mapbox/node-sqlite3/blob/master/examples/simple-chaining.js
var sqlite3 = require('sqlite3').verbose();  
var db = new sqlite3.Database('clovece.db');  
  
db.serialize(function() {  
  db.run("CREATE TABLE users (id INT, dt TEXT)");  
  
  var statement = db.prepare("INSERT INTO users VALUES (?,?)");  

  for (var i = 0; i < 10; i++) {  
    var d = new Date();  
    var n = d.toLocaleTimeString();  
    statement.run(i, n);  
  }  
  statement.finalize();  
  
  db.each("SELECT id, dt FROM users", function(err, row) {  
      console.log("User id : "+row.id, row.dt);  
  });  
});  
 
db.close(); 