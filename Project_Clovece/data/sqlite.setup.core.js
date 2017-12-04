// https://github.com/mapbox/node-sqlite3/blob/master/examples/simple-chaining.js
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('clovece.db');

function createParametersListForCreateTableQuery(parameters) {
    var query = "";
    for (var i = 0; i < parameters.length; i++) {
        query += parameters[i].name + " " + parameters[i].type + (i+1 == parameters.length ? "" : ",");
    }
    return query;
}

function createParametersListForSelectQuery(parameters) {
    var query = "";
    for (var i = 0; i < parameters.length; i++) {
        query += parameters[i].name + " " + (i+1 == parameters.length ? "" : ",");
    }
    return query;
}

function createParametersPlaceholderForInsertQuery(parameters) {
    var query = "";
    for (var i = 0; i < parameters.length; i++) {
        query += "?" + (i+1 == parameters.length ? "" : ",");
    }
    return query;
}

//exports.ensureTable = 
function ensureTable(tableName, parameters) {
    db.serialize(function() {  
        var paramsQuery = createParametersListForCreateTableQuery(parameters);
        var tableExists = db.get("SELECT count(*) as count FROM sqlite_master WHERE type='table' AND name='" + tableName + "'", function (error, row) {
            if(row.count == 0) {
                db.run("CREATE TABLE " + tableName + " (" + paramsQuery + ")");  //" (id INT, dt TEXT)");   
            }
        });

        var insertParametersList = createParametersPlaceholderForInsertQuery(parameters);
        var statement = db.prepare("INSERT INTO " + tableName + " VALUES (" + insertParametersList + ")");  

        for (var i = 0; i < 10; i++) {  
            var d = new Date();  
            var n = d.toLocaleTimeString();  
            statement.run(i, n);  
        }  
        statement.finalize();  
        
        var listParams = createParametersListForSelectQuery(65, parameters);
        db.each("SELECT " + listParams + " FROM " + tableName + "", function(err, row) {  
            //console.log("Row : " + row.id, row.dt);  
        });  
    });  
    
    db.close(); 
}

function insertData(tableName, data) {
    db.serialize(function() {  
        var insertParametersList = createParametersPlaceholderForInsertQuery(parameters);
        var statement = db.prepare("INSERT INTO " + tableName + " VALUES (" + insertParametersList + ")");  

        for (var i = 0; i < data.length; i++) {  
            statement.run(data[i]);  
        }  
        statement.finalize();  
    });  
    
    db.close(); 
}

function listAllData(tableName, parameters) {
    db.serialize(function() {  
        var listParams = createParametersListForSelectQuery(65, parameters);
        db.each("SELECT " + listParams + " FROM " + tableName + "", function(err, row) {  
            var stringData = "";
            for(var i = 0; i < parameters.length; i++) {
                stringData += row["\"" + parameters[i].name + "\""] + ",";
            }
            console.log("Row : " + stringData);  
        });    
    });  
    
    db.close();
}

var paramsForFunc = [{name: "id", type: "INT"}, {name: "dt", type: "TEXT"}];
ensureTable("users", paramsForFunc);
insertData("users", [[1, "first"], [2, "second"]]);
listAllData("users", paramsForFunc);