// https://github.com/mapbox/node-sqlite3/blob/master/examples/simple-chaining.js
var fs = require('fs');
var sqlite3 = require('sqlite3').verbose();
var helpers = require('./sqlite.helpers');


function ensureTable(dbConn, tableName, parameters, successHandler) {
    dbConn.serialize(function() {  
        var paramsQuery = helpers.paramsQueryForCreate(parameters);
        var tableExists = false;
        dbConn.get("SELECT count(*) as count FROM sqlite_master WHERE type='table' AND name='" + tableName + "'", function (error, row) {
            tableExists = row.count > 0;
            console.log("Table " + tableName + ": " + (tableExists ? "exists" : "does not exist"));
            if(!tableExists) {
                dbConn.run("CREATE TABLE " + tableName + " (" + paramsQuery + ")");  //" (id INT, dt TEXT)");   
                console.log("Creating table" + tableName);
            }

            if(successHandler && typeof successHandler === "function") {
                successHandler(dbConn);
            }
        });
    });  
}

function insertData(dbConn, tableName, data, successHandler) {
    dbConn.serialize(function() {  
        var insertParametersList = helpers.paramsQueryForInsert(data);
        var statement = dbConn.prepare("INSERT INTO " + tableName + " VALUES (" + insertParametersList + ")");  

        for (var i = 0; i < data.length; i++) {  
            statement.run(data[i]);  
        }  
        statement.finalize();  

        if(successHandler && typeof successHandler === "function") {
            successHandler(dbConn);
        }
    });  
}

function selectAllData(dbConn, tableName, parameters, successHandler) {
    dbConn.serialize(function() {  
        var listParams = helpers.paramsQueryForSelect(parameters);
        dbConn.each("SELECT " + listParams + " FROM " + tableName + "", function(err, row) {  
            var stringData = "";
            for(var i = 0; i < parameters.length; i++) {
                stringData += row[parameters[i].name] + ",";
            }
            console.log("Row : " + stringData);  
        });    
        if(successHandler && typeof successHandler === "function") {
            successHandler(dbConn);
        }
    });  
}

var paramsForFunc = [{name: "id", type: "INT"}, {name: "dt", type: "TEXT"}];
var usersTableName = "users";


// if(fs.exists('./data/clovece.db')) {
//     console.log('Deleting DB');
//     fs.unlinkSync('./data/clovece.db');
// }

try
{
    var db = new sqlite3.Database('./data/clovece.db');
    ensureTable(db, usersTableName, paramsForFunc, function(db) {
        var d = new Date();  
        var n = d.toLocaleTimeString();
        insertData(db, usersTableName, [[1, n], [2, "second"]], function(db) {
            selectAllData(db, usersTableName, paramsForFunc);
            db.close();
        });
    });
}
catch(exception) 
{
    db.close();
}