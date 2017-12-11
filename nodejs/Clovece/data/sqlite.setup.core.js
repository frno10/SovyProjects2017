// https://github.com/mapbox/node-sqlite3/blob/master/examples/simple-chaining.js
var fs = require('fs');
var sqlite3 = require('sqlite3').verbose();
var helpers = require('./sqlite.helpers');
var dbConnection = new sqlite3.Database('./data/clovece.db');

function ensureTable(tableName, parameters) {
    dbConnection.serialize(function() {  
        var paramsQuery = helpers.paramsQueryForCreate(parameters);
        var tableExists = false;
        dbConnection.get("SELECT count(*) as count FROM sqlite_master WHERE type='table' AND name='" + tableName + "'", function (error, row) {
            tableExists = row.count > 0;
            console.log("Table " + tableName + ": " + (tableExists ? "exists" : "does not exist"));
            if(!tableExists) {
                dbConnection.run("CREATE TABLE " + tableName + " (" + paramsQuery + ")");  //" (id INT, dt TEXT)");   
                console.log("Creating table" + tableName);
            }
        });
    });  
}

function insertData(tableName, data) {
    dbConnection.serialize(function() {  
        var insertParametersList = helpers.paramsQueryForInsert(data);
        var statement = dbConnection.prepare("INSERT INTO " + tableName + " VALUES (" + insertParametersList + ")");  

        for (var i = 0; i < data.length; i++) {  
            statement.run(data[i]);  
        }  
        statement.finalize();
    });  
}

function selectAllData(tableName, parameters) {
    dbConnection.serialize(function() {  
        var listParams = helpers.paramsQueryForSelect(parameters);
        dbConnection.each("SELECT " + listParams + " FROM " + tableName + "", function(err, row) {  
            var stringData = "";
            for(var i = 0; i < parameters.length; i++) {
                stringData += row[parameters[i].name] + ",";
            }
            console.log("Row : " + stringData);  
        });
    });  
}

exports.getData = function (tableName, parameters) {
    return new Promise(function(resolve, reject) {
        dbConnection.serialize(function() {  
            var listParams = helpers.paramsQueryForSelect(parameters);
            dbConnection.all("SELECT " + listParams + " FROM " + tableName + "", function(err, rows) {  
                if(err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });  
    });
};